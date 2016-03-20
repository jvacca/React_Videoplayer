var gulp = require('gulp'),
	gulpif = require('gulp-if'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify'),
	browserify = require('gulp-browserify');

function doNothing() {

}

module.export = gulp.task('browserify', function() {
  return gulp.src(config.src.mainjs)
  .pipe(browserify({
    insertGlobals : true
  }))
  .pipe(gulpif(release, rename(config.dest.release.bundle), rename(config.dest.build.bundle)))
  .pipe(gulpif(release, uglify(), doNothing()))
  .pipe(gulpif(release, gulp.dest(config.dest.release.scripts), gulp.dest(config.dest.build.scripts)));
});