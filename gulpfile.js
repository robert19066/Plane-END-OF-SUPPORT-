import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('install-dependencies', shell.task([
  'npm install'
]));

gulp.task('default', gulp.series('install-dependencies'));
