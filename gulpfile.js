const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('install-dependencies', shell.task([
  'npm install'
]));

gulp.task('default', gulp.series('install-dependencies'));
