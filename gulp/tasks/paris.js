var gulp = require('gulp');
var clean      = require('gulp-clean');
var config     = require('../config');
var fs         = require('fs');

gulp.task('default', ['harp:serve', 'watch:js']);
gulp.task('compile', ['harp:compile', 'compile:js']);
gulp.task('build',   ['build:js', 'build:images', 'build:fonts', 'build:css', 'build:themes', 'build:jade', 'build:runtime', 'copy:config', 'copy:locales', 'copy:modernizr'], function () {

    if(fs.existsSync(config.build.output + '/client.tpl.js')){
      fs.renameSync(config.build.output + '/client.tpl.js', config.build.assets.javascript + '/client.tpl.js');
    }

    if(fs.existsSync(config.build.output + '/runtime.tpl.js')){
      fs.renameSync(config.build.output + '/runtime.tpl.js', config.build.assets.javascript + '/runtime.tpl.js');
    }

    return gulp.src('src/stylesheets/paris-*.scss', {read: false})
        .pipe(clean());
});
