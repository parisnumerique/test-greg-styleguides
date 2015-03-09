var gulp   = require('gulp');
var config = require('../config');
var path = require('path');

gulp.task('build:jade', function () {
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
      'src/layouts/**/*.json',
      'src/templates/**/*.jade',
      'src/templates/**/*.json'
    ], { base: './src/' })
    .pipe(gulp.dest(path.join(config.build.output, 'jade')));
});

