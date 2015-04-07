var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var babelify = require('babelify');
var rename = require('gulp-rename');
var through2 = require('through2');
var less = require('gulp-less');



var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('buildTesting', function() {
  return gulp.src('./js/app.jsx')
    .pipe(through2.obj(function(file, enc, next) {
      browserify(file.path, {debug: true})
        .transform(babelify)
        .bundle(function(err, res) {
          if(err) {return next(err);}

          file.contents = res;
          next(null, file);
        });
    }))
    .on('error', function(error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(rename(getBundleName() + '.js'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('buildHTML', function() {
  return gulp.src('./html/**.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('buildCSS', function() {
  return gulp.src('./CSS/**.css')
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('buildLess', function() {
  return gulp.src('./less/main.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build', ['buildHTML', 'buildLess', 'buildTesting']);

gulp.task('local', ['buildHTML', 'buildLess', 'buildTesting']);

gulp.task('default', ['build']);

gulp.task('watch', function() {
  gulp.watch(['js/**/*.js','js/**/*.jsx'], ['buildTesting']);
  gulp.watch('html/**/*.html', ['buildHTML']);
  gulp.watch('less/**/*.less', ['buildLess']);
});
