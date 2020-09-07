// SERVER
var fs = require('fs')
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var mime = require('mime-types')
var argv = require('yargs').argv;
var dest = './build'
if (argv.dest){
  dest = argv.dest
}
console.log(argv)
var reload = require('reload')
reloader = ()=>{console.log("reload not initialised yet")}

// BUILDER
var config = {
  title: 'Spaceships in Space',
  siteURL: 'https://spaceshipsin.space/',
  temp: './temp',
  pugLayout: 'pug/layout.pug',
  dest: dest,
  root: './sources',
  public: 'public/**',
  html: 'pug/out/*.pug',
  pug: 'pug',
  css: 'sass/out/*.sass',
  jspath: 'js',
  jsname: 'app.js',
  markdown: 'markdown/out',
  markglob: '/**/*.md',
  all: '**',
  done: argv.b ? ()=>{process.exit(0)} : ()=>{reloader()},
  quickbuild: argv.q ? argv.q : 0
}
// var libconfig = {
//   dest: './build',
//   root: './libsources',
//   public: 'public/**',
//   html: 'pug/out/*.pug',
//   css: 'sass/out/*.sass',
//   jspath: 'js',
//   jsname: 'lib.js',
//   all: '**'
// }

var builder = require('./builder')
console.log(config);

builder(config);

if (!argv.b){
  var app = express();
  app.use(function(req, res, next) {
    if (req.path.substr(-1) == '/' && req.path.length > 1) {
        let query = req.url.slice(req.path.length);
        res.redirect(301, req.path.slice(0, -1) + query);
    } else {
        next();
    }
  });
  app.get('/', (req, res, next)=>{
    fs.readFile(path.join(dest, "index.html"), (err, data)=>{
      if (err){
        next();
      } else {
        res.set('Content-Type', 'text/html');
        res.send(data);
      }
    })
  })
  app.get(/.*/, (req, res, next)=>{
    fs.readFile(path.join(dest, req.path), (err, data)=>{
      if (err){
        next();
      } else {
        var mtype = mime.lookup(req.path);
        res.set('Content-Type', mtype ? mtype : 'text/plain');
        res.send(data);
      }
    })
  })
  app.get(/.*/, (req, res, next)=>{
    fs.readFile(path.join(dest, req.path+".html"), (err, data)=>{
      if (err){
        next();
      } else {
        res.set('Content-Type', 'text/html');
        res.send(data);
      }
    })
  })
  app.listen(3000, function(){
    console.log('Server running on 3000...');
  });
  reloader = reload(app).reload;
}

//builder(reload, libconfig);