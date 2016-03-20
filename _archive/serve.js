var gulp = require('gulp');
var connect = require('gulp-connect');

module.exports = gulp.task('serve', function() {
  connect.server({
    root: 'build',
    port: '8080',
    livereload: true
  });
});
