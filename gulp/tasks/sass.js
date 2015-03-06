var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');
var path = require('path');

//sass: pls edit the src and path according to your project
gulp.task('build:css', function () {
    gulp.src(['src/stylesheets/paris.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        // .pipe(sourcemaps.write('/', {includeContent: false}))
        .pipe(gulp.dest(path.join(config.build.assets.css)));
});


