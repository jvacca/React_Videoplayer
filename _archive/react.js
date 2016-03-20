var gulp = require('gulp'),
	reactify = require('reactify'),
	browserify = require('gulp-browserify');

gulp.task('react', function(){
  browserify({
    entries: [config.src.mainjs],
    transform: [reactify]
  })
    .bundle()
    .pipe(source(config.dest.build.bundle))
    .pipe(gulp.dest(config.dest.build.scripts));
});