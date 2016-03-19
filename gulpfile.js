var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass');
var es = require('event-stream');
var inject = require('gulp-inject');
var rev = require('gulp-rev-append');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var angularFilesort = require('gulp-angular-filesort');

var paths = {};

gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('rev', function() {
    gulp.src('app/index.html')
        .pipe(rev())
        .pipe(gulp.dest('app/'));
});

gulp.task('dist', ['sass'], function() {
    var css = gulp.src('sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));

    gulp.src('img/**/*.*')
        .pipe(gulp.dest('./dist/img'));

    var bower = gulp.src(mainBowerFiles())
        .pipe(concat('bower.js'))
        .pipe(gulp.dest('./dist/js/'));

    gulp.src('./app/js/**/*.js')
            .pipe(gulp.dest('./dist/js/'));

    gulp.src('./app/views/**/*.html')
            .pipe(gulp.dest('./dist/views/'));


    var injectOptions = {
        addRootSlash: false,
        ignorePath: 'dist/'
    };

    gulp.src('app/index.html')
        .pipe(inject(bower, {name: 'bower', ignorePath: 'dist/'}))
        .pipe(inject(
            gulp.src('./app/**/*.js')
                    .pipe(angularFilesort())
        , { ignorePath: 'app/' }))
        .pipe(inject(css, injectOptions))
        .pipe(rev())
        .pipe(gulp.dest('./dist/'));
});