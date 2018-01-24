const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');


// 编译scss
gulp.task('css', function () {
  gulp.src([
    '../src/styles/build.scss'
  ]).pipe(sass())
    .pipe(autoprefixer({
      browsers: [
        "iOS >= 7",
        "Android >= 4.1"
      ]
    }))
    .pipe(cleanCSS())
    .pipe(rename('vuw-pmui.css'))
    .pipe(gulp.dest('../dist'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
  gulp.src('../src/styles/fonts/*.*')
    .pipe(gulp.dest('../dist/fonts'));
});

gulp.task('default', ['css', 'fonts']);
