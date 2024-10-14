const fs = require("fs");
const path = require("path");

// Require superstructure
const superstructure = require("superstructure");

// Set your configuration
const config = {
  // Name of your website
  name: "Spaceships in Space",
  // What your website is about
  description: "Gaeel's spaceship in space",
  // Canonical URL for your website
  author: {
    name: "Gaeel Bradshaw-Rodriguez",
    email: "gaeel@spaceshipsin.space",
  },
  siteUrl: "https://spaceshipsin.space",
  // Where to put the generated website
  dest: "./build",
  // Where to copy the generated website for serving
  serve: "./serve",
  // Where all your content is
  root: "./sources",
  // Files to copy verbatim
  public: "public",
  // Page templates (must include a layout.pug template at least)
  templates: "pug",
  // Stylesheets (written in sass)
  css: "sass/out",
  // Your articles (written in Markdown)
  articles: "markdown/out",
  // Images types to make compressed versions of
  crunch: [".jpg", ".png"],
  // Feed formats to generate
  feeds: [
    {
      template: "atom",
      target: "atom.xml",
      type: "application/atom+xml",
    },
    {
      template: "rss",
      target: "rss.xml",
      type: "application/rss+xml",
    },
  ],
};

if (!fs.existsSync(config.serve)) {
  fs.mkdirSync(config.serve);
}

function walk(dir){
	let files = [];
	const elems = fs.readdirSync(dir);
	for (const elem of elems) {
		const stat = fs.statSync(path.join(dir,  elem));
		if (stat.isDirectory()) {
			files = files.concat(walk(path.join(dir,  elem)));
		} else {
			files.push(path.join(dir,  elem));
		}
	}
	return files;
}

function safe_copy(from, to) {
  const walked = walk(from);
  const files = walked.map(file => {
    const relative = file.split(path.sep).splice(1);
    return {
      from: path.join(...[from].concat(relative)),
      to: path.join(...[to].concat(relative)),
    };
  });
  for (const file of files) {
    if (!fs.existsSync(path.dirname(file.to))) {
      console.log(`Making directory ${path.dirname(file.to)} for ${file.to}`);
      fs.mkdirSync(path.dirname(file.to), {recursive: true});
    }
    if (!fs.existsSync(file.to) || !fs.readFileSync(file.from).equals(fs.readFileSync(file.to))) {
      console.log(`Copying ${file.from} to ${file.to}`);
      fs.cpSync(file.from, file.to);
    }
  }
}

superstructure
  .use_md(require("markdown-it-table-of-contents"), {
    includeLevel: [2, 3, 4],
  })
  .use_md(require("markdown-it-highlightjs"))
  .build(config)
  .then(() => {

    if (fs.existsSync(config.serve)) { 
      fs.rmSync(path.join(config.serve, '*'), {
        force: true,
        recursive: true,
      });
    } else {
      fs.mkdirSync(config.serve);
    }

    safe_copy(config.dest, config.serve);

    // Code you want to run when the build is done
    console.log("Launched!");
  });
