var changed  = require('gulp-changed');
var gulp     = require('gulp');
var pkg      = require('../../package.json')

gulp.task('metadata', function() {
  var dest = pkg.folders.dest+'/static';

  return gulp.src(pkg.folders.src+'/metadata/**')
    .pipe(changed(dest))
    .pipe(gulp.dest(dest));
});
