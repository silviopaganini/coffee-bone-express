var gulp      = require('gulp');
var modernizr = require('gulp-modernizr');
var pkg       = require('../../package.json');

gulp.task('modernizr', function() {
  gulp.src(pkg.folders.dest+'/static/js/*.js')
    .pipe(modernizr())
    .pipe(gulp.dest(pkg.folders.dest+'/static/js/vendor/'))
});
