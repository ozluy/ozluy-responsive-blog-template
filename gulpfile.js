var gulp = require('gulp');
var connect = require('gulp-connect');// Runs a local dev server
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var del = require('del');
var server = require('gulp-express');
var pug = require('gulp-jade');
var imageop = require('gulp-image-optimization');
var copy = require('gulp-contrib-copy');

var paths = {
  port:9191,
  devBaseUrl: 'http://localhost',
  scripts: ['dev/assets/js/jquery.min.js',  'dev/assets/js/jquery.bxslider.min.js',  'dev/assets/js/segment.min.js',  'dev/assets/js/validator.min.js',  'dev/assets/js/ease.min.js',  'dev/assets/js/main.js',  'dev/assets/js/common.js'],
  styles:'dev/assets/css/*.scss',
  html:'./dev/*.html',
  templates:'./dev/views/*.pug',
  shared_templates:'./dev/views/shared/*.jade',
  images:['dev/assets/img/*.png','dev/assets/img/*.jpg','dev/assets/img/*.gif','dev/assets/img/*.jpeg','dev/assets/img/*.svg'],
  copy_icons:'dev/assets/icons/**/*',
  copy_fonts:'dev/assets/fonts/**/*'
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
  return del.sync(['dist/**/*']);
});
gulp.task('connect', function() {
  connect.server({
    root:'./dist',
    livereload: true,
    port:9191
  });
});
gulp.task('copy_icons',['clean'], function() {
  gulp.src(paths.copy_icons)
  .pipe(copy())
  .pipe(gulp.dest('dist/icons'));
});
gulp.task('images', function(cb) {
  gulp.src(paths.images).pipe(imageop({
    optimizationLevel: 5,
    progressive: true,
    interlaced: true
  })).pipe(gulp.dest('dist/img')).on('end', cb).on('error', cb);
});

gulp.task('html', function () {
  gulp.src(paths.html)
  .pipe(connect.reload())
});
gulp.task('templates', function() {
  return gulp.src(paths.templates)
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});
gulp.task('shared_templates', function() {
  return gulp.src(paths.shared_templates)
  .pipe(pug({ pretty: true }))
  //.pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});
gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/js'))
  .pipe(connect.reload());
});

gulp.task('styles', function() {
  return gulp.src(paths.styles)
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(concat('bundle.css'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/css'))
  .pipe(connect.reload());
});



// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts'], server.notify);
  gulp.watch(paths.styles, ['styles'], server.notify);
  gulp.watch([paths.shared_templates], ['shared_templates','templates'], server.notify);
  gulp.watch([paths.templates], ['templates'], server.notify);
  gulp.watch([paths.html], ['html'], server.notify);
});

gulp.task('default', ['clean','copy_icons','images','styles', 'scripts','shared_templates', 'templates', 'watch','connect']);
