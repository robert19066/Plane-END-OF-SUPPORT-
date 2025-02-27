import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('install-dependencies', shell.task([
  'echo "Installing dependencies..."',
  'npm install',
  'echo "Fixing vulnerabilities..."',
  'npm audit fix --force',
  'echo "Dependencies installed!"',
  'echo "Happy coding!"'
]));

gulp.task('default', gulp.series('install-dependencies'));
