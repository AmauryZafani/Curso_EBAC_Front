const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('imagemin', function () {
  return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
});

gulp.task('js', function () {
  return gulp.src('./src/js/*.js')
    .pipe(terser())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/*.scss', gulp.series('sass'));
  gulp.watch('./src/images/*', gulp.series('imagemin'));
  gulp.watch('./src/js/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'imagemin', 'js', 'watch'));
