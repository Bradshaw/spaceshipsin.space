#### Code   
The code that generates this website is hosted on my [Git drydock repo](https://drydock.spaceshipsin.space/gaeel/spaceshipsin-space)   
I cannot guarantee that it is fit for your purpose, nor that it is anywhere near the best way to achieve what I've done. This is simply the tool I've built for the dual purpose of having a website that I enjoy using, and learning to use node.js and its ecosystem.

## Build process
As the footer of this website says, everything you see here rests on the shoulders of giants standing on mountains of Javascript. I'm using [Markdown](https://daringfireball.net/projects/markdown/syntax), [Pug](https://pugjs.org), and [Sass](https://sass-lang.com/) to create all of the content. And then a stack of over a million lines of Javascript, mostly in the form of [Gulp](https://gulpjs.com/) plugins, interprets these files to generate the HTML and CSS that I serve to you, the reader.

My goal when setting up this process was to have the ease of use of an easy content creation mechanism, with the flexibility of a dynamic website that modern web tools allow.  
Meanwhile, I want to keep the site lightweight (for you), and to be as widely compatible as possible. At the time of writing [the main page](/), with all the images, is a 66.8KB download. It's possible to do better, maybe, but I feel like it's quick enough, even on my bad 3G connection.  


### Writing
I chose to use [Markdown](https://daringfireball.net/projects/markdown/syntax) for the written content, because it's easy to use, looks nice in my editor when I'm writing, and gives me everything I need to easily write articles, lists, CVs, etc…
It's a markup language I've used a lot across various projects, and I highly recommend using it if you're looking for a simple text writing format.
I use the [Marked](https://marked.js.org/) compiler as a Pug filter, which allows me to embed the compiled Markdown into a more complete website, with a fixed header and footer on each page.

### Images
![Picture from Mind Thief](/thief.700w.jpg)
I dump all images I use into a folder, where they get copied to the server, uncompressed.  
In parallel, there's a filter that rescales images to 700px wide, compresses them as JPEG, and saves them alongside the original.  
#### Compare
* [thief.jpg (125KB)](/thief.jpg)
* [thief.700w.jpg (25.3KB)](/thief.700w.jpg)

This means I don't have to worry about converting images manually, but still allows me to use the full, uncompressed data if I want to show off high-resolution images. The extra storage space isn't an issue for me, and this allows me to pick and choose when and where more bandwidth usage is necessary.

### Page design
The layout of the page is written in [Pug](https://pugjs.org), and styled with [Sass](https://sass-lang.com/). Pug is a template engine, but mostly I use it as a more flexible and easier to read HTML alternative. Pug can do things like loops, importing other files, and running some compile-time code. These are the mechanisms I use to wrap the written content with the header and footer, and insert the "Last built" mention at the bottom of the page.   
The build script scans for all Markdown pages to build, and swaps in copies of `layout.pug` with a reference to the document in each one.  
Apparently no-one else does this, because it was a real pain to get working, and ended up with me having to add weird `[[markdown]]` tags into the Pug code, that the builder would replace at build time.

[Sass](https://sass-lang.com/) is a joy to work with, I wish it could just be the new stylesheet standard. It's got variables, simple functions, macros, and all kinds of toys to easily write CSS without the otherwise inevitable hair-tearing session. If you spend any time at all writing CSS, use Sass, or something like it, to help you write CSS easier. Run it as a standalone program if you have to, but never suffer the slings and arrows of outrageous stylesheet hell ever again.

### Gulp
And then there's [Gulp](https://gulpjs.com/). Gulp is a system that transforms data. In most cases, it reads a bunch of files, and outputs a bunch of files, and does that any time one of the original files changes.  
The best thing I can say about it is that it does what it says on the tin. Unfortunately, it's a pain to work with. No two plugins share the same way to configure them, error handling is a complete and total mess, and tutorials and documentation are written as though you *already know* what the hell a "Vinyl Stream" is.   
The code for this build system is a mess to look at, and part of me is still not sure if that mess is just how you configure a Gulp build process, or if I've committed some terrible sin against modern Javascript frameworks.  
Either way, it does actually work. Now I can write articles such as this one, refresh my browser, and if all looks right, upload the whole shebang with a simple rsync script, lovely.

<hr>

If you have any questions about all of this, feel free to [get in touch](/contact.html). I'm probably not the best person to talk to about modern web software, but I feel like I've learnt a few things along the way.  
If you have the know-how (or want to use [this system](https://drydock.spaceshipsin.space/gaeel/spaceshipsin-space)), I recommend doing something like this. Updating my website is now super easy, and I don't have to fiddle with a CMS or authentication or anything.


%YAML 1.2
---
title: Build Process
tags:
  - meta