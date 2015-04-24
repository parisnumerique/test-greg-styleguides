var gulp   = require('gulp');
var config = require('../config');
var path   = require('path');
var rename = require('gulp-rename');
var rm     = require('rimraf');
var templatizer = require('templatizer');

gulp.task('build:runtime', function () {
  try {
    templatizer(config.harp.input+'/@(components|modules)/!(_*)/!(index).jade', config.build.assets.javascript + '/runtime.tpl.js', {
      dontRemoveMixins: true,
      namespace: 'Paris.bo_templates'
    });
  }
  catch (e) {
     console.error(e.message);
  }
})


gulp.task('build:clients', function () {

  var clients = config.templatizer.client_modules;

  try {
    templatizer(config.harp.input+'/@(components|modules)/@('+clients.join('|')+')/!(index).jade', config.build.assets.javascript + '/client.tpl.js', {
      dontRemoveMixins: true,
      namespace: 'Paris.templates'
    });
  }
  catch (e) {
     console.error(e.message);
  }
})




