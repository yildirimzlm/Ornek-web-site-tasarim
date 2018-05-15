var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var sass            = require('gulp-sass');
var browserSync     = require('browser-sync').create();
var reload          = browserSync.reload;




gulp.task('server', function () {
    browserSync.init({
        server: './'
    });
});


gulp.task('autoprefixer', function () {
    return gulp.src('scss/style.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('css'));
});


gulp.task('sass',function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});


gulp.task('default', ['server'], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', reload);
});

