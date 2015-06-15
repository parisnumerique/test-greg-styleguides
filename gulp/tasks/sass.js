var config     = require('../config');
var File       = require('vinyl');
var fs         = require('fs');
var gulp       = require('gulp');
var path       = require('path');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var through2   = require('through2');

gulp.task('build:css', function () {
    gulp.src(['src/stylesheets/paris*.scss', 'src/stylesheets/print.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        // .pipe(sourcemaps.write('/', {includeContent: false}))
        .pipe(gulp.dest(path.join(config.build.assets.css)));
});
