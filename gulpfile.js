'use strong';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const jasmine = require('gulp-jasmine');

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

gulp.task('jasmine', () => {
  return gulp.src('spec/**/*.spec.js')
    .pipe(jasmine());
});

gulp.task('lint', ['eslint'], () => {});
gulp.task('test', ['jasmine'], () => {});

gulp.task('default', ['lint', 'test'], () => {});
