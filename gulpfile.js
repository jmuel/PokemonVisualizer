var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

gulp.task('buildJs', function () {
    return browserify({debug: true}).
        transform(reactify).
        add('./js/app.js').
        bundle().
        pipe(source('bundle.js')).
        pipe(gulp.dest('./dist'));
});

var getBundleName = function () {
    var version = require('./package.json').version;
    var name = require('./package.json').name;
    return version + '.' + name + '.' + 'min';
};

gulp.task('buildNewJS', function() {
    var bundler = browserify({
        entries: ['./js/app.js'],
        debug: true
    });

    var bundle = function() {
        return bundler
            .transform(reactify)
            .bundle()
            .pipe(source(getBundleName() + '.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            // Add transformation tasks to the pipeline here.
                .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./dist/js/'));
    };

    return bundle();
})


gulp.task('buildHTML', function() {
    return gulp.src('./html/index.html').
        pipe(gulp.dest('./dist'));
});

gulp.task('build', ['buildHTML','buildNewJS']);

gulp.task('default', ['build']);