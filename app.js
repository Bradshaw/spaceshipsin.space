// SERVER
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var argv = require('yargs').argv;
var dest = './build'
if (argv.dest){
  dest = argv.dest
}
var app = express().use(serveStatic(dest));
var reload = require('reload')
var reloader = reload(app);

// BUILDER
var config = {
  title: 'Spaceships in Space',
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
  markdown: 'markdown/out/**/*.md',
  all: '**',
  done: argv.b ? ()=>{process.exit(0)} : ()=>{console.log("Done building")}
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
  app.listen(3000, function(){
    console.log('Server running on 3000...');
  });
}

//builder(reload, libconfig);