This website is built with [Superstructure](https://superstructure.dev). It's a static website generator that I made by re-writing the previous system for this website.

### Writing
I chose to use [Markdown](https://daringfireball.net/projects/markdown/syntax) for the written content, because it's easy to use, looks nice in my editor when I'm writing, and gives me everything I need to easily write articles, lists, CVs, etc…
Articles also include a little chunk of YAML at the end to add metadata, such as update dates, tags, titles, and some page-specific configuration.

### Images
![Picture from Mind Thief](/thief.700w.jpg)
I dump all images I use into a folder, where they get copied to the server, uncompressed.  
In parallel, there's a filter that rescales images to 700px wide, compresses them as JPEG, and saves them alongside the original.  
#### Compare
* [thief.jpg (125KB)](/thief.jpg)
* [thief.700w.jpg (11KB)](/thief.700w.jpg)

This means I don't have to worry about converting images manually, but still allows me to use the full, uncompressed data if I want to show off high-resolution images. The extra storage space isn't an issue for me, and this allows me to pick and choose when and where more bandwidth usage is necessary.

### Page design
The layout of the page is written in [Pug](https://pugjs.org), and styled with [Sass](https://sass-lang.com/). Pug is a template engine, but mostly I use it as a more flexible and easier to read HTML alternative. Pug can do things like loops, importing other files, and running some compile-time code. These are the mechanisms I use to wrap the written content with the header and footer, and insert the "Last built" mention at the bottom of the page.   
The build script scans for all Markdown pages to build, and swaps in copies of `layout.pug` with a reference to the document in each one.  
Apparently no-one else does this, because it was a real pain to get working, and ended up with me having to add weird `[[markdown]]` tags into the Pug code, that the builder would replace at build time.

[Sass](https://sass-lang.com/) is a joy to work with, I wish it could just be the new stylesheet standard. It's got variables, simple functions, macros, and all kinds of toys to easily write CSS without the otherwise inevitable hair-tearing session. If you spend any time at all writing CSS, use Sass, or something like it, to help you write CSS easier. Run it as a standalone program if you have to, but never suffer the slings and arrows of outrageous stylesheet hell ever again.

### Superstructure
[Superstructure](https://superstructure.dev) is built to facilitate this workflow, in fact the workflow came first, with several iterations, and then I built Superstructure to replace the old, bloated build system.



%YAML 1.2
---
title: Build Process
tags:
  - technology
  - meta
created: 2019-10-17T09:58:17.000Z
updated: 2021-08-07T10:14:17.242Z
