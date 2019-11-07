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
      .pipe(print(filepath => `generated: ${filepath}`))
  }
}

function markdownBuilder(){
  return through.obj(function (chunk, enc, cb) {
    //console.log('chunk', chunk.contents) // this should log now
    cb(null, chunk)
  })
}

function splitYAML(cwd){
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
      var yaml = new vinyl({
        cwd: cwd,
  			path: path.join(base,path.basename(file.path,".md")+".yaml"),
  			contents: Buffer.from(strings[1])
  		})
      this.push(yaml)
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
        + " - " + config.title;
    } else {
      return config.title
    }
  }
  
  gulp.task('html', htmlBuilder(path.join(config.root, config.html)));
  
  gulp.task('markdown', function(){
    var all = []
    return gulp.src(path.join(config.temp+"/**/*.md"))
      .pipe(print(filepath => `working: ${filepath}`))
      .pipe(errorHandler())
      .pipe(modify({
        fileModifier: function(file, contents){
          var pugLayout = fs.readFileSync(path.join(config.root, config.pugLayout),'utf8');
          var depth = (file.path.split("/").length - 7);
          var dots = "..";
          for (var i = 0; i<depth; i++){
            dots = path.join("..",dots);
          }
          var dirname = path.join("..","..","..","..","..","..",path.dirname(file.path))
          var tryPath = path.join("..","temp",dirname,path.basename(file.path))
          return pugLayout
            .replace('[[markdown]]', tryPath)
            .replace(/\[\[dots\]\]/g, dots);
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
          data.title = data.title + " - " + config.title
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
        basedir: '/Users/Gaeel/dev/newSpaceships/sources/pug/',
        pretty: true
      }))
      .pipe(gulp.dest(config.dest))
      .pipe(print(filepath => `generated: ${filepath}`))
  })

  gulp.task('css', function(){
    return gulp.src(path.join(config.root, config.css))
      .pipe(errorHandler())
      .pipe(sass())
      //.pipe(minifyCSS())
      .pipe(gulp.dest(config.dest))
      .pipe(print(filepath => `generated: ${filepath}`))
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
      .pipe(print(filepath => `copied: ${filepath}`))
  });

  gulp.task('clean', function(done) {
    del([path.join(config.dest, '*')]).then(paths => {
      console.log('Deleted files and folders:\n\t'+ paths.join('\n\t'));
      done();
    });
  });
  gulp.task('cleantemp', function(done) {
    del([path.join(config.temp, '*')]).then(paths => {
      console.log('Deleted files and folders:\n\t'+ paths.join('\n\t'));
      done();
    });
  });
  
  gulp.task('preprocess', function(){
    try {
      return gulp.src(path.join(config.root, config.markdown))
        .pipe(errorHandler())
        .pipe(splitYAML(path.join(config.root,  "markdown", "out")))
        .pipe(gulp.dest(config.temp))
    } catch (e) {
      console.error(e)
    }
  });
  
  gulp.task('collecttags', function(){
    return gulp.src(config.temp+"/**/*.yaml")
      .pipe(debug({title: 'unicorn:'}))
      //.pipe(yamlMerge('tags.yaml'))
      .pipe(doMerge(
        "tags.yaml",
        (memo, file)=>{
          try{
            var data = yaml.safeLoad(file.contents.toString())
            var memo = memo || [];
            if (data.hasOwnProperty("tags")){
              for (var i = 0; i < data.tags.length; i++) {
                var tag = data.tags[i];
                if (!memo.hasOwnProperty(tag)){
                  memo[tag] = [];
                }
                memo[tag].push({
                  url: "/"+path.relative(config.temp,file.path).replace(".yaml",".html"),
                  title: data.title || getDefaultTitle(file, ".yaml")
                });
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
    var tagstr = "## All tags: \n"
    for (var tag in tags) {
      var str = "## Pages tagged with: "+tag+"\n";
      if (tags.hasOwnProperty(tag)) {
        tagstr+="* ["+tag+"](/tag/"+tag.replace(" ","-")+".html)\n"
        for (var i = 0; i < tags[tag].length; i++) {
          str+="* ["+tags[tag][i].title+"]("+tags[tag][i].url+")\n";
        }
      }
      str+="\n[View all available tags](/tags.html)";
      fs.writeFileSync(path.join(config.temp,"tag",tag.replace(" ","-")+".md"), str);
    }
    fs.writeFileSync(path.join(config.temp,"tags.md"), tagstr);
    done();
  })
  
  gulp.task('build', gulp.parallel('markdown', 'css', 'public' ));
  
  gulp.task('clearscreen', function(done) {
    console.clear();
    console.log("Building...");
    done();
  })
  
  gulp.task('reload', function(done) {
    console.log("Build done, calling \"done\" callback");
    config.done();
    done();
  })
  
  gulp.task('cleanbuild', gulp.series('clean', 'cleantemp', 'preprocess', 'collecttags', 'mapandtag', 'build', 'reload'));
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