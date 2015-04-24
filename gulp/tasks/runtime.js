var gulp   = require('gulp');
var config = require('../config');
var path   = require('path');
var rename = require('gulp-rename');
var rm     = require('rimraf');
var templatizer = require('templatizer');

gulp.task('build:runtime', function (cb) {
  try {
    templatizer(config.harp.input+'/@(components|modules)/!(_*)/!(index).jade', config.build.output + '/runtime.tpl.js', {
      dontRemoveMixins: true,
      namespace: 'Paris.bo_templates'
    });
    cb();
  }
  catch (e) {
     console.error(e.message);
  }
})


gulp.task('build:clients', function (cb) {
  var clients = config.templatizer.client_modules;

  gulp.src('./src/javascript/config.js')
    .pipe(gulp.dest(config.build.assets.javascript));

  try {
    templatizer(config.harp.input+'/@(components|modules)/@('+clients.join('|')+')/!(index).jade', config.build.output + '/client.tpl.js', {
      dontRemoveMixins: true,
      namespace: 'Paris.templates'
    });
    cb();
  }
  catch (e) {
     console.error(e.message);
  }
})




