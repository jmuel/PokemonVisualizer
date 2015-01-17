var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');

gulp.task('build', function () {
    return browserify().
        transform(reactify).
        add('./js/App.js').
        bundle().
        pipe(source('bundle.js')).
        pipe(gulp.dest('./dist'));
});

