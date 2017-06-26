var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var css = require('gulp-css');
var uglify = require('gulp-uglify');


gulp.task('serve', ['sass', 'jsLibs', 'angularScripts', 'cssLib'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./index.html").on('change', browserSync.reload);
    gulp.watch("./images/**/*.*").on('change', browserSync.reload);
    gulp.watch("./scss/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("./js/**/*.js", ['angularScripts']).on('change', browserSync.reload);
    gulp.watch("./libs/**/*.js", ['jsLibs']).on('change', browserSync.reload);
    gulp.watch("./templates/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('cssLib', function() {
    return gulp.src([
            "./node_modules/bootstrap/dist/css/bootstrap.css",
            '/node_modules/angular-material/angular-material.css',
            "./node_modules/animate.css/animate.css",
            "./libs/_w3-css.scss"
        ])
        .pipe(sass()).on('error', sass.logError)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest("./src/css/"));
});


gulp.task('sass', function() {
    return gulp.src([
            "./scss/main.scss"
        ])
        .pipe(sass()).on('error', sass.logError)
        .pipe(concat("app.css"))
        .pipe(gulp.dest("./src/css/"));
});
gulp.task('jsLibs', function() {
    return gulp.src([
            "./node_modules/jquery/dist/jquery.min.js",
            'node_modules/lodash/lodash.min.js',
            "./node_modules/bootstrap/dist/js/bootstrap.js",
            './node_modules/angular/angular.js',
            "./node_modules/angular-route/angular-route.js",
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-aria/angular-aria.js',
            './node_modules/angular-material/angular-material.js',
            "./js/libs/**/*.js"
        ])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest("./src/lib/"))

});

gulp.task('angularScripts', function() {
    return gulp.src([
            "./js/**/*.js"
        ])
        .pipe(concat('angularScripts.js'))
        .pipe(gulp.dest("./src/js/"))

});

gulp.task('default', ['serve']);
