var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');

var paths = {};

gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.sass', ['sass']);
});