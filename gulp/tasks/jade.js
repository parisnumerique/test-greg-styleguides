var gulp   = require('gulp');
var config = require('../config');
var path   = require('path');
var rename = require('gulp-rename');


gulp.task('build:jade:copy', function () {
  gulp.src([
      'src/modules/**/*.jade',
      '!src/modules/**/index.jade',
      '!src/modules/_template/*',
      'src/modules/**/*.json',
      'src/components/**/*.jade',
      '!src/components/**/index.jade',
      '!src/components/_template/*',
      'src/components/**/*.json',
      'src/layouts/**/*.jade',
      '!src/layouts/**/index.jade',
      '!src/layouts/wrapper*.jade',
      'src/layouts/**/*.json',
      'src/templates/**/*.jade',
      'src/templates/**/*.json'
    ], { base: './src/' })
    .pipe(gulp.dest(path.join(config.build.output, 'jade')));
});

gulp.task('build:jade', ['build:jade:copy'], function () {
  gulp.src(path.join('src', 'layouts', '_wrapper_prod.jade'))
    .pipe(rename('wrapper.jade'))
    .pipe(gulp.dest(path.join('build', 'jade', 'layouts')));
})
