// SERVER
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var reload = require('reload')
var app = express().use(serveStatic(path.join(__dirname, 'build')));
var reloader = reload(app);
var argv = require('yargs').argv;
/*
app.listen(3000, function(){
    console.log('Server running on 3000...');
});
*/
var dest = './build'
if (argv.dest){
  dest = argv.dest
}

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
//builder(reload, libconfig);