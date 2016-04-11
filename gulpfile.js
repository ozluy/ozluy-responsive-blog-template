var gulp = require('gulp');
var connect = require('gulp-connect');// Runs a local dev server
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var path = require('path');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var server = require('gulp-express');

var paths = {
  port:9191,
  devBaseUrl: 'http://localhost',
  scripts: ['assets/js/jquery.min.js',  'assets/js/jquery.bxslider.min.js',  'assets/js/segment.min.js',  'assets/js/validator.min.js',  'assets/js/ease.min.js',  'assets/js/main.js',  'assets/js/common.js'],
  styles:'assets/css/*.less'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del(['build']);
});

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    port:9191
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload())
});

gulp.task('scripts', function() {
  // Minify and copy all JavaScript
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('all.min.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('build/js'))
  .pipe(connect.reload());
});
gulp.task('styles',  function() {
  // Minify and copy all css
  // with sourcemaps all the way down
  return gulp.src(paths.styles)
  .pipe(less())
  .pipe(minifyCSS())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('build/css'))
  .pipe(connect.reload());
});



// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts'], server.notify);
  gulp.watch(paths.styles, ['styles'], server.notify);
  gulp.watch(['./*.html'], ['html'], server.notify);
});

gulp.task('default', ['clean','styles', 'scripts', 'watch','connect']);
