var fs= require('fs');
var md = require('markdown-it')();
var del = require('del');
var path = require('path');
var through = require('through2');
var flat = require('flat-map').default;
var vinyl = require('vinyl');
var gulp = require('gulp');
var fn = require('gulp-fn');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var wrap = require('gulp-wrap');
var data = require('gulp-data');
var scale = require('gulp-scale-images');
var reduce = require('gulp-reduce-file');
var yamlMerge = require('gulp-yaml-merge');
var doMerge = require('gulp-do-merge');
var maybe = require('gulp-if');
var change =require('gulp-change');
var modify = require('gulp-modify');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var print = require('gulp-print').default;
var errorHandler = require('gulp-error-handle')
var debug = require('gulp-debug');
var PluginError = require('plugin-error');
var touch = require('touch');

var dateFormat = require('dateformat');
var child_process = require('child_process');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var RSS = require('rss');
var urljoin = require('urljoin');

var yaml = require("js-yaml");
//var gutil = require("gulp-util");

// THE BULLSHIT
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');

var outputFile = require('output-file')

function talk(str) {
  return function() {
    console.log(str);
  }
}

function moveOn(err) {
  console.clear();
  console.error(err);
}

function htmlBuilder(htmlpath) {
  return function builder(){
    return gulp.src(htmlpath)
      .pipe(errorHandler())
      .pipe(pug())
      .pipe(gulp.dest('build'))
      //.pipe(print(filepath => `generated: ${filepath}`))
  }
}

function markdownBuilder(){
  return through.obj(function (chunk, enc, cb) {
    //console.log('chunk', chunk.contents) // this should log now
    cb(null, chunk)
  })
}

function getFirstParagraph(mdpath){
  var mdstr = fs.readFileSync(mdpath, 'utf8');
  var htmlstr = md.render(mdstr);
  const dom = new JSDOM(htmlstr);
  var paragraphs = dom.window.document.getElementsByTagName("p")
  var i = 0;
  while (i<paragraphs.length && paragraphs[i].contains(dom.window.document.querySelector("img"))){
    i++;
  }
  var first = i<paragraphs.length ? paragraphs[i].textContent : "No preview";
  return first;
}
function getFirstImageURL(mdpath){
  var mdstr = fs.readFileSync(mdpath, 'utf8');
  var htmlstr = md.render(mdstr);
  const dom = new JSDOM(htmlstr);
  var firstP = dom.window.document.querySelector("p")
  var image = dom.window.document.querySelector("img")
  var first = (image && firstP.contains(image)) ? image.src : "/favicon.png";
  return first;
}

function splitYAML(cwd, config){
  return through.obj(function(file, enc, next){
    var strings = file.contents.toString('utf8').split(/(?=%YAML)/);
    var base = path.join(file.path, '..');
    if (strings.length>0){
      var markdown = new vinyl({
        cwd: cwd,
  			path: path.join(base,path.basename(file.path)),
  			contents: Buffer.from(strings[0])
  		})
      this.push(markdown)
    }
    if (strings.length>1){
      var data = yaml.safeLoad(strings[1])
      var mdpath = file.path;
      data.preview = data.hasOwnProperty("preview") ? data.preview : getFirstParagraph(mdpath);
      data.imageURL = data.hasOwnProperty("imageURL") ? data.imageURL : getFirstImageURL(mdpath);
      data.updated = data.hasOwnProperty("updated") ? data.updated : new Date(child_process.execSync('git log -1 --pretty="format:%ci" '+mdpath));
      data.updated = isNaN(data.updated) ? new Date() : data.updated;
      data.created = data.hasOwnProperty("created") ? data.created : new Date(child_process.execSync('git log --pretty="format:%ci" '+mdpath+' | tail -1'))
      data.created = isNaN(data.created) ? data.updated : data.created;
      data.status = data.hasOwnProperty("status") ? data.status : "published";      
      data.url = "/"+path.relative(path.join(config.root,config.markdown),file.path).replace(".md","");
      var yamlob = new vinyl({
        cwd: cwd,
  			path: path.join(base,path.basename(file.path,".md")+".yaml"),
  			contents: Buffer.from(yaml.safeDump(data))
  		})
      this.push(yamlob)
    }
    next();
  })
}



var builder = function(config){
  function getDefaultTitle(file, ext){
    var ext = ext || ".md"
    var filename = path.basename(file.path, ext);
    if (filename!="index"){
      return path.basename(file.path, ext)
        .split(/[ -]/)
        .map(s=>s.charAt(0).toUpperCase() + s.slice(1))
        .join(" ")
    } else {
      return config.title
    }
  }
  
  gulp.task('html', htmlBuilder(path.join(config.root, config.html)));
  
  gulp.task('markdown', function(){
    var all = []
    return gulp.src(path.join(config.temp+"/**/*.md"))
      //.pipe(print(filepath => `working: ${filepath}`))
      .pipe(errorHandler())
      .pipe(modify({
        fileModifier: function(file, contents){
          var pugLayout = fs.readFileSync(path.join(config.root, config.pugLayout),'utf8');
          return pugLayout
            .replace(/\[\[markdown\]\]/g, path.basename(file.path));
        }
      }))
      .pipe(data(file=>{
        var dir = path.dirname(file.path);
        var filename = path.basename(file.path,".md");
        var yamlPath = path.join(dir,filename+".yaml");
        if (fs.existsSync(yamlPath)){
          var data = yaml.safeLoad(fs.readFileSync(yamlPath, 'utf8'));
          if (!data.hasOwnProperty("title")){
            data.title = getDefaultTitle(file);
          }
          data.title = data.title
          return data;
        } else {
          return {
            title: getDefaultTitle(file)
          }
        }
      }))
      .pipe(rename(function(p){
        p = path.join(config.root, config.pugLayout);
      }))
      .pipe(pug({
        basedir: path.join(config.root, config.pug),
        pretty: true
      }))
      // .pipe(modify({
      //     fileModifier: (file, contents)=>{
      //       const dom = new JSDOM(contents);
      //       Array.from(dom.window.document.querySelectorAll( 'a' ) )
      //       .forEach( a => {
      //         if (dom.window.location.hostname !== a.hostname && a.hostname.length) {
      //           a.classList.add('external');
      //           a.target = '_blank';
      //         }
      //       });
      //       return dom.serialize();
      //     }
      // }))
      .pipe(gulp.dest(config.dest))
      //.pipe(print(filepath => `generated: ${filepath}`))
  })

  gulp.task('css', function(){
    return gulp.src(path.join(config.root, config.css))
      .pipe(errorHandler())
      .pipe(sass())
      //.pipe(minifyCSS())
      .pipe(gulp.dest(config.dest))
      //.pipe(print(filepath => `generated: ${filepath}`))
  });

  gulp.task('js', function () {
    var b = browserify({
      entries: path.join(config.root, config.jspath, config.jsname),
      debug: true,
      transform: [babelify.configure({
        presets: ['babel-preset-env']
      })]
    });

    return b.bundle()
      .pipe(errorHandler())
      .on('error', function(err){
        console.error(err.message);
        this.emit('end');
      })
      .pipe(source(path.join(config.jsname)))
      .pipe(print(filepath => `bundling: ${filepath}`))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.dest))
      .pipe(print(filepath => `bundled: ${filepath}`))
  });
  var scaleParameters = (file, cb)=>{
    const jpegFile = file.clone()
    jpegFile.scale = {maxWidth: 700, format: 'jpg'}
    cb(null, [jpegFile])
  }
  gulp.task('public', function(){
    return gulp.src(path.join(config.root, config.public))
      .pipe(errorHandler())
      .pipe(gulp.dest(config.dest))
      .pipe(flat(scaleParameters))
      .pipe(maybe(function(file){
        return [".jpg",".jpeg",".png"].includes(path.extname(file.path));
      }, scale()))
      .pipe(gulp.dest(config.dest))
      //.pipe(print(filepath => `copied: ${filepath}`))
  });

  gulp.task('clean', function(done) {
    del([path.join(config.dest, '*')]).then(paths => {
      done();
    });
  });
  gulp.task('cleantemp', function(done) {
    del([path.join(config.temp, '*')]).then(paths => {
      done();
    });
  });
  
  gulp.task('preprocess', function(){
    try {
      return gulp.src(path.join(config.root, config.markdown+config.markglob))
        .pipe(errorHandler())
        .pipe(splitYAML(path.join(config.root,  "markdown", "out"), config))
        .pipe(gulp.dest(config.temp))
    } catch (e) {
      console.error(e)
    }
  });
  
  gulp.task('collecttags', function(){
    return gulp.src(config.temp+"/**/*.yaml")
      //.pipe(debug({title: 'unicorn:'}))
      //.pipe(yamlMerge('tags.yaml'))
      .pipe(doMerge(
        "tags.yaml",
        (memo, file)=>{
          try{
            var data = yaml.safeLoad(file.contents.toString())
            var memo = memo || [];
            var mdpath = path.join(config.root, config.markdown, path.relative(config.temp,file.path).replace(".yaml",".md"));
            var modDate = data.hasOwnProperty("updated") ? data.updated : new Date(child_process.execSync('git log -1 --pretty="format:%ci" '+mdpath));
            modDate = isNaN(modDate) ? new Date() : modDate;
            var creationDate = data.hasOwnProperty("created") ? data.created : new Date(child_process.execSync('git log --pretty="format:%ci" '+mdpath+' | tail -1'))
            creationDate = isNaN(creationDate) ? modDate : creationDate;
            var status = data.hasOwnProperty("status") ? data.status : "published";
            var published = status!="unpublished"
            var tags = data.tags;
            var preview = data.preview;
            var imageURL = data.imageURL
            if (data.hasOwnProperty("tags")){
              data.tags.unshift("all")
              for (var i = 0; i < data.tags.length; i++) {
                var tag = data.tags[i];
                if (!memo.hasOwnProperty(tag)){
                  memo[tag] = [];
                }
                if (true || published){
                  memo[tag].push({
                    url: "/"+path.relative(config.temp,file.path).replace(".yaml",""),
                    title: data.title || getDefaultTitle(file, ".yaml"),
                    updated: modDate,
                    created: creationDate,
                    status: status,
                    preview: preview,
                    imageURL: imageURL,
                    tags: tags
                  });
                  memo[tag] = memo[tag].sort((a,b)=>{
                    return new Date(b.created) - new Date(a.created);
                  }).sort((a,b)=>{
                    return new Date(b.date) - new Date(a.date);
                  })
                }
              }
            }  
          } catch (e) {
            console.log("This is file: "+file)
            console.error(e)
          }
          return memo
        },
        memo=>{
          try {
            return yaml.safeDump(memo)
          } catch (e) {
            console.error(e)
          }
        },
        {}
      ).on('error',console.log))
      .pipe(gulp.dest(config.temp))
  })
  
  gulp.task('mapandtag', function(done){
    fs.mkdirSync(path.join(config.temp,"tag"))
    var tags = yaml.safeLoad(fs.readFileSync(path.join(config.temp,"tags.yaml")).toString('utf8'))
    var tagstr = "## All tags\n"
    for (var tag in tags) {
      //if (tag=="all") continue;
      var str = "## Pages tagged with _"+tag+"_\n";
      str += "[Get this tag as an RSS feed](/tag/"+tag+"/rss.xml)\n\n";
      if (tags.hasOwnProperty(tag)) {
        if (tags[tag].filter(t=>t.status!="unpublished").length>0){
          tagstr+="* ["+tag+"](/posts/"+tag.replace(" ","-")+")"
          tagstr+=" <a class=\"rss\" href=\"/tag/"+tag.replace(" ","-")+"/rss.xml\">(rss.xml)</a>\n"
        }
        for (var i = 0; i < tags[tag].length; i++) {
          if (tags[tag][i].status!="unpublished"){
            str+="* ["+tags[tag][i].title+" - "+dateFormat(new Date(tags[tag][i].updated), "mmmm dS, yyyy")+"]("+tags[tag][i].url+")\n";
          }
        }
      }
      str+="\n[View all available tags](/tags)";
      fs.writeFileSync(path.join(config.temp,"tag",tag.replace(" ","-")+".md"), str);
    }
    fs.writeFileSync(path.join(config.temp,"tags.md"), tagstr);
    done();
  })
  
  gulp.task('generate-posts', function(done){
    fs.mkdirSync(path.join(config.temp,"posts"))
    var tags = yaml.safeLoad(fs.readFileSync(path.join(config.temp,"tags.yaml")).toString('utf8'))
    var tagstr = "# All posts\n"
    tagstr+="\n[Filter by tag](/tags)\n";
    for (var tag in tags) {
      //if (tag=="all") continue;
      var str = "# Posts tagged with _"+tag+"_\n";
      str += "\n[View all available tags](/tags)<br />";
      str += "[Get this feed as RSS](/tag/"+tag+"/rss.xml)\n\n";
      if (tags.hasOwnProperty(tag)) {
        for (var i = 0; i < tags[tag].length; i++) {
          if (tag=="all") {
            if (tags[tag][i].status!="unpublished"){
              tagstr+="## "+tags[tag][i].title+"\n";
              //str+="<span>_"+dateFormat(new Date(tags[tag][i].updated), "mmmm dS, yyyy")+"_</span>\n"
              tagstr+=tags[tag][i].preview+"<br />"
              tagstr+="[Read more...]("+tags[tag][i].url+")<br /><br />\n";
            }
          }
          if (tags[tag][i].status!="unpublished"){
            str+="## "+tags[tag][i].title+"\n";
            //str+="<span>_"+dateFormat(new Date(tags[tag][i].updated), "mmmm dS, yyyy")+"_</span>\n"
            str+=tags[tag][i].preview+"<br />"
            str+="[Read more...]("+tags[tag][i].url+")<br /><br />\n";
          }
        }
      }
      fs.writeFileSync(path.join(config.temp,"posts",tag.replace(" ","-")+".md"), str);
    }
    fs.writeFileSync(path.join(config.temp,"posts.md"), tagstr);
    done();
  })
  
  gulp.task('generate-rss', function(done){
    var tags = yaml.safeLoad(fs.readFileSync(path.join(config.temp,"tags.yaml")).toString('utf8'))
    for (var tag in tags) {
      if (tags.hasOwnProperty(tag)) {
        if (tags[tag].filter(t=>t.status!="unpublished").length>0){
          var feed = new RSS({
            title: tag+" @ "+config.title,
            description: "Articles tagged with \""+tag+"\" on "+config.title,
            feed_url: config.siteURL+'tag/'+tag+"/rss.xml",
            site_url: config.siteURL+'tag/'+tag,
            generator: "spaceshipsin-space",
            categories: [tag]
          })
          for (var i = 0; i < tags[tag].length; i++) {
            if (tags[tag][i].status!="unpublished"){
              var item = tags[tag][i];
              feed.item({
                title: item.title,
                description: item.preview,
                url: urljoin(config.siteURL,item.url),
                categories: item.tags,
                date: new Date(item.updated),
              })
            }
          }
          var folderpath = path.join(config.dest,"tag",tag);
          var filepath = path.join(folderpath, "rss.xml");
          fs.mkdirSync(folderpath, {recursive : true})
          fs.writeFileSync(filepath, feed.xml({indent: true}));
        }
      }
    }
    //fs.writeFileSync(path.join(config.temp,"tags.md"), tagstr);
    done();
  })
  
  
  gulp.task('tag-to-site', gulp.series('preprocess', 'collecttags', gulp.parallel('mapandtag', 'generate-rss', 'generate-posts')));
  gulp.task('generate', gulp.parallel('public', 'css', gulp.series('tag-to-site', 'markdown')));
  
  gulp.task('clearscreen', function(done) {
    console.clear();
    console.log("Building...");
    done();
  })
  gulp.task('prepare', gulp.series('clearscreen', gulp.parallel('clean', 'cleantemp')))
  
  gulp.task('reload', function(done) {
    console.log("Build done, calling \"done\" callback");
    config.done();
    done();
  })
  
  
  gulp.task('cleanbuild', gulp.series('prepare', 'generate', 'reload'));
  var watcher = gulp.watch(path.join(config.root, config.all), gulp.series('cleanbuild'))
  setTimeout(()=>{
    touch(path.join(config.root, config.pugLayout));
  },200)
}


function wrapPipe(taskFn) {
  return function(done) {
    var onSuccess = function() {
      done();
    };
    var onError = function(err) {
      done(err);
    }
    var outStream = taskFn(onSuccess, onError);
    if(outStream && typeof outStream.on === 'function') {
      outStream.on('end', onSuccess);
    }
  }
}

function handleError (err) {
  console.log(err.toString())
  process.exit(-1)
}

Array.prototype.union = function (array) {
  var conc = this.concat(array);
  return conc.filter((i,p)=>{
    return conc.indexOf(i) == p
  });
};

module.exports = builder;