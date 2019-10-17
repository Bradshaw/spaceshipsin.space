// SERVER
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var reload = require('reload')
var app = express().use(serveStatic(path.join(__dirname, 'build')));
var reloader = reload(app);
app.listen(3000, function(){
    console.log('Server running on 3000...');
});


// BUILDER
var config = {
  title: 'Spaceships in Space',
  temp: './temp',
  pugLayout: 'pug/layout.pug',
  dest: './build',
  root: './sources',
  public: 'public/**',
  html: 'pug/out/*.pug',
  pug: 'pug',
  css: 'sass/out/*.sass',
  jspath: 'js',
  jsname: 'app.js',
  markdown: 'markdown/out/**/*.md',
  all: '**'
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
var reload = ()=>reloader.reload();
console.log(config);

builder(reload, config);
//builder(reload, libconfig);