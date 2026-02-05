const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
require('dotenv').config({ quiet: true });

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

function walk(dir) {
  let files = [];
  const elems = fs.readdirSync(dir);
  for (const elem of elems) {
    const stat = fs.statSync(path.join(dir, elem));
    if (stat.isDirectory()) {
      files = files.concat(walk(path.join(dir, elem)));
    } else {
      files.push(path.join(dir, elem));
    }
  }
  return files;
}

function remove_deleted(from, to) {
  const walked = walk(to);
  const files = walked.map(file => {
    const relative = file.split(path.sep).splice(1);
    return {
      from: path.join(...[from].concat(relative)),
      to: path.join(...[to].concat(relative)),
    };
  });
  for (const file of files) {
    if (!fs.existsSync(path.dirname(file.from)) && fs.existsSync(path.dirname(file.to))) {
      console.log(`Removing directory ${path.dirname(file.to)}`)
      fs.rmdirSync(path.dirname(file.to), { recursive: true, force: true });
    }
  }
  for (const file of files) {
    if (!fs.existsSync(file.from) && fs.existsSync(file.to)) {
      console.log(`Removing file ${file.to}`)
      fs.rmSync(file.to);
    }
  }
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
      fs.mkdirSync(path.dirname(file.to), { recursive: true });
    }
    if (!fs.existsSync(file.to) || !fs.readFileSync(file.from).equals(fs.readFileSync(file.to))) {
      console.log(`Copying ${file.from} to ${file.to}`);
      fs.cpSync(file.from, file.to);
    }
  }
  remove_deleted(from, to);
  console.log(`Copied ${from} to ${to}`);
}

superstructure
  .use_md(require("markdown-it-table-of-contents"), {
    includeLevel: [2, 3, 4],
  })
  .use_md(require("markdown-it-highlightjs"))
  .build(config)
  .then(() => {
    console.log("deployment!");
    if (fs.existsSync(config.serve)) {
      console.log(`Clear out ${config.serve}`);
      fs.rmSync(path.join(config.serve, '*'), {
        force: true,
        recursive: true,
      });
    } else {
      console.log(`Create ${config.serve}`);
      fs.mkdirSync(config.serve);
    }

    safe_copy(config.dest, config.serve);

    if (process.env.POST_BUILD) {
      console.log(`Running post build command: ${process.env.POST_BUILD}`);
      execSync(process.env.POST_BUILD, (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    }
    console.log(`Deleting ${config.dest}`);
    fs.rmSync(config.dest, { recursive: true, force: true });
  });
