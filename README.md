# spaceshipsin.space

This is the code that generates [my personal website](https://spaceshipsin.space)   
__The content inside ```sources``` is *not* free to use__, it's the content of my personal website. Please don't use my writing, pictures, layout, or other content without asking me first. I'm only making this repo public so people can see how the website was built, and use the same tools for their own websites. If you choose to fork this repo, please make sure you've changed or removed the content within the ```sources``` folder before making it public, thanks!   

Everything *outside* of the ```sources```folder is pretty much a free-for-all, if you want to use my tools to build your own website, have fun!   
I'm not expecting to provide any support outside of this readme, since this is just a bespoke tool for my personal use. Read [this page](https://spaceshipsin.space/meta/build-process.html) if you want to know more about why I build my website this way.   
   
To run this tool, you'll need [node.js](https://nodejs.org/en/), I'm using [v10.0.0](https://nodejs.org/dist/v10.0.0/), but I'm fairly sure it'll work with any version after that too.   
To install all the plugins, you'll need to do ```npm install``` inside the root folder and let it do its thing.   
Once all the plugins are set up, run ```npm start``` and leave the program running while you edit the website.
The website will be generated and appear in a folder named ```build``` each time you save a file inside ```sources```. You can view the website you're editing at [http://localhost:3000](http://localhost:3000)   

The builder will take all the [markdown](https://daringfireball.net/projects/markdown/) in ```sources/markdown/out``` and compile it to html files. If there's a YAML block at the end of a markdown file, the builder will use the ```title``` string and ```tags``` array to inform the html title and the site map.   
```sources/pug/layout.pug``` describes the layout of each article, written in [pugjs](https://pugjs.org/api/getting-started.html). The ```[[dots]]``` and ```[[markdown]]``` tags are custom extensions that enable the builder to drop in strings as needed   
The ```sources/public``` folder is copied over to ```build```. Any images will also have a minified version generated, 700 pixels wide and jpg compressed, with the file extension set to ```.700w.jpg```.