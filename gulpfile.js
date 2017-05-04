const gulp = require('gulp');
const ejs = require('gulp-ejs');

gulp.task('default', () => {
  console.log('[Notice]: Except for `template:ejs` task, no use Gulp.');
});


gulp.task('template:ejs', () => {
  const data = {};
  const option = {};
  const setting = {
    ext: '.html'
  };

  gulp.src([
      'src/templates/**/*.ejs',
      '!src/templates/**/_*.ejs'
    ])
    .pipe(ejs(data, option, setting))
    .pipe(gulp.dest('./public'));
});
