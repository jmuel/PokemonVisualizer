var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('buildJs', function () {
    return browserify().
        transform(reactify).
        add('./js/app.js').
        bundle().
        pipe(source('bundle.js')).
        pipe(gulp.dest('./dist'));
});


gulp.task('buildHTML', function() {
    return gulp.src('./html/index.html').
        pipe(gulp.dest('./dist'));
});

gulp.task('build', ['buildHTML','buildJs']);