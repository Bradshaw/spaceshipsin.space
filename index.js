// Require superstructure
const superstructure = require("superstructure");

// Set your configuration
const config = {
	// Name of your website
	name: 'Spaceships in Space',
	// What your website is about
	description: "Gaeel's spaceship in space",
	// Canonical URL for your website
	siteUrl: 'https://spaceshipsin.space/',
	// Where to put the generated website
	dest: './build',
	// Where all your content is
	root: './sources',
	// Files to copy verbatim
	public: 'public',
	// Page templates (must include a layout.pug template at least)
	templates: 'pug',
	// Stylesheets (written in sass)
	css: 'sass/out',
	// Your articles (written in Markdown)
	articles: 'markdown/out',
	// Images types to make compressed versions of 
	crunch: [".jpg",".png"],
};


superstructure
	.use_md(require("markdown-it-table-of-contents"), {
		includeLevel: [2,3,4]
	})
	.build(config)
	.then(()=>{
		// Code you want to run when the build is done
		console.log("Launched!");
	});