// Include The Plugins
var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    imagemin = require('gulp-imagemin'),
    minify = require('gulp-uglify'),
    rename = require('gulp-rename');


// Css Task
gulp.task('css', function(cbcss) {
    // Template
    gulp.src(['stage/sass/main.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        })) //expanded
        .pipe(prefix('last 2 versions'))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest('dist/css'))
    //auth

        cbcss();
});

// JS Task
gulp.task('js', function(cb) {

    // All JS File In Directly Folder
    gulp.src(['stage/js/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))

    // Singel Page Js
    gulp.src(['stage/js/runtime/*.js'])
        .pipe(minify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist/js/runtime'))

    cb();
});

// Images Task
gulp.task('imgminify', function() {
    return gulp.src('stage/images/*')
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest('dist/images'))
});

// Watch Task
gulp.task('watch', function() {
    gulp.watch('stage/sass/**/*.scss', gulp.series('css'));
    gulp.watch('stage/js/**/*.js', gulp.series('js'));
    gulp.watch('stage/images/*', gulp.series('imgminify'));

});
