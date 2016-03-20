var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    gulpif = require('gulp-if'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    streamify = require('gulp-streamify'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify');

function doNothing() {
  //
}

gulp.task('reactbrowserify', function() {
  browserify({
      entries: [config.src.mainjs],
      paths: ['./src/app/'],
      debug: true,
      transform: [reactify]
    })
    .bundle().on('error', function(err) {
          gutil.log('JSX ERROR in ' + err.fileName);
          gutil.log(err.message);
        })
    .pipe(gulpif(release, source(config.dest.release.bundle), source(config.dest.build.bundle)))
    .pipe(gulpif(release, streamify(uglify(config.dest.release.bundle)), doNothing()))
    .pipe(gulpif(release, gulp.dest(config.dest.release.scripts), gulp.dest(config.dest.build.scripts)));
 });