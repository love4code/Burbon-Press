/**
 * Created by markgrover on 12/11/15.
 */
var gulp = require('gulp');

var prefix = require('gulp-autoprefixer');

var jaded = require('gulp-jade');

var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError ))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
        gulp.watch('css/styles.sass', ['sass']);
        gulp.watch('jade-templates/*.jade', ['jaded']);
});

gulp.task('jaded', function() {
   var YOUR_LOCALS = {};
   gulp.src('jade-templates/*.jade')
       .pipe(jaded({
           locals: YOUR_LOCALS,
           pretty: true
       }))
       .pipe(gulp.dest('jade-templates/views'))
});

