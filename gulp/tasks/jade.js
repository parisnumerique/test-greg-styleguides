var gulp   = require('gulp');
var config = require('../config');
var path   = require('path');
var rename = require('gulp-rename');
var replace = require('gulp-replace');


gulp.task('build:jade:copy', function () {
  gulp.src([
      'src/modules/**/*.jade',
      '!src/modules/**/index.jade',
      '!src/modules/_template/*',
      '!src/modules/_layout.jade',
      'src/modules/**/*.json',
      'src/components/**/*.jade',
      '!src/components/**/index.jade',
      '!src/components/_template/*',
      '!src/components/_layout.jade',
      'src/components/**/*.json',
      'src/layouts/**/*.jade',
      '!src/layouts/**/index.jade',
      '!src/layouts/wrapper*.jade',
      '!src/layouts/_wrapper*.jade',
      '!src/layouts/_layout*.jade',
      'src/layouts/**/*.json'
    ], { base: './src/' })

    // Fix path to included svg
    .pipe(replace('include nef.svg', 'include ../../../assets/images/modules/rheader/nef.svg'))
    .pipe(replace('include paris.svg', 'include ../../../assets/images/modules/rheader/paris.svg'))

    .pipe(gulp.dest(path.join(config.build.output, 'jade')));
});

gulp.task('build:jade', ['build:jade:copy'], function () {
  gulp.src(path.join('src', 'layouts', '_wrapper.jade'))
    .pipe(rename('wrapper.jade'))
    .pipe(gulp.dest(path.join('build', 'jade', 'layouts')));
});

