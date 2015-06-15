var config     = require('../config');
var File       = require('vinyl');
var fs         = require('fs');
var gulp       = require('gulp');
var path       = require('path');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var through2   = require('through2');

gulp.task('build:css', ['build:themes:files'], function () {
    gulp.src(['src/stylesheets/paris*.scss', 'src/stylesheets/print.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        // .pipe(sourcemaps.write('/', {includeContent: false}))
        .pipe(gulp.dest(path.join(config.build.assets.css)));
});

gulp.task('build:themes:files', function () {
    gulp.src(['src/stylesheets/paris.scss'])
        .pipe(generate_themes())
        .pipe(gulp.dest(path.join('src/stylesheets')));
});

gulp.task('compile:themes', ['build:themes:files'],  function () {
    gulp.src(['src/stylesheets/paris*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    // .pipe(sourcemaps.write('/', {includeContent: false}))
    .pipe(gulp.dest(path.join(config.build.assets.css)));
});

gulp.task('build:themes', ['compile:themes']);

function generate_themes(){
  'use strict';
  return through2.obj(function(file, enc, next){
    var pattern = '// @import_theme;'
    var files = fs.readdirSync('src/stylesheets/themes');
    var themes = files
      .map(function (filename) {
        return filename.replace('.scss', '');
      });
    var mainScss = file.contents.toString('utf8');
    var base = path.join(file.path, '..');
    themes.forEach(function generateTheme(theme) {
      var content = mainScss.replace('// @import_theme;', '@import "./themes/'+theme+'";');
      this.push(new File({
        base: base,
        path: path.join(base, 'paris-' + theme + '.scss'),
        contents: new Buffer(content)
      }));
    }, this)

    next();
  });
}
