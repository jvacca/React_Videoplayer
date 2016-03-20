 var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    reactify = require('reactify'),
    gutil = require('gulp-util'),
    streamify = require('gulp-streamify');

gulp.task('reactwatchify', function() {
    var watcher  = watchify(browserify({
      entries: [config.src.mainjs],
      paths: ['./src/app/'],
      transform: [reactify],
      debug: true,
      cache: {}, packageCache: {}, fullPaths: true
    }));

    return watcher.on('update', function () {
      watcher.bundle()
        .on('error', function(err) {
          gutil.log('JSX ERROR in ' + err.fileName);
          gutil.log(err.message);
        })
        .pipe(source(config.dest.build.bundle))
        .pipe(gulp.dest(config.dest.build.scripts));
    })
    .bundle()
    .pipe(source(config.dest.build.bundle))
    .pipe(gulp.dest(config.dest.build.scripts));
});