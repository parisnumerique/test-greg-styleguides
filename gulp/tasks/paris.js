var gulp = require('gulp');
var clean      = require('gulp-clean');

gulp.task('default', ['harp:serve', 'watch:js']);
gulp.task('compile', ['harp:compile', 'compile:js']);
gulp.task('build',   ['build:js', 'build:images', 'build:fonts', 'build:css', 'build:themes', 'build:jade', 'copy:config', 'copy:locales'], function () {
    return gulp.src('src/stylesheets/paris-*.scss', {read: false})
        .pipe(clean());
});
