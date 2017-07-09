'use strict';

const gulp = require('gulp');
const jasmine = require('gulp-jasmine');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');

const tsconfig = require('./tsconfig.json');

gulp.task('build', () => {
  gulp.src('src/*.ts')
  .pipe(sourcemaps.init())
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(uglify())
  .pipe(rename({extname: '.min.js'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('src'));
});

gulp.task('test', () => {
  gulp.src('test/*.spec.ts')
  .pipe(typescript(tsconfig.compilerOptions))
  .pipe(jasmine());
});
