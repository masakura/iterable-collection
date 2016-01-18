'use strong';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
  return gulp.src([
    'index.js',
    'lib/**/*.js',
    'spec/**/*.js',
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
