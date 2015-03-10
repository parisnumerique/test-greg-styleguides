var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watchify = require('watchify');
var browserify = require('browserify');
var config      = require('../config');
var path = require('path');

var browserifyBundler = browserify('./src/javascript/main.js', watchify.args);
var watchifyBundler = watchify(browserify('./src/javascript/main.js', watchify.args));

browserifyBundler.transform('jadeify');
browserifyBundler.transform('brfs');
watchifyBundler.transform('jadeify');
watchifyBundler.transform('brfs');

gulp.task('watch:js', watch); // so you can run `watch:js` to build the file
gulp.task('compile:js', compile); // so you can run `compile:js` to build the file
gulp.task('build:js', build); // so you can run `gulp build:js` to build the file
watchifyBundler.on('update', watch); // on any dep update, runs the watchifyBundler
watchifyBundler.on('log', gutil.log); // output build logs to terminal

function watch() {
  return watchifyBundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Watchify Error'))
    .pipe(source(config.js.output))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(path.join(config.harp.input, 'javascript')));
}

function compile () {
  bundle(path.join(config.harp.output, 'javascript'));
}

function build () {
  bundle(config.build.assets.javascript);
}

function bundle(output) {
  return browserifyBundler
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.js.output))
    .pipe(gulp.dest(output)) ;
}
