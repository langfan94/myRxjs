var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var browserify = require("browserify");
var fs = require("fs");

gulp.task("babel", function (cb) {
  return gulp.src("app.js")
    .pipe(babel())
    .pipe(rename('main.js'))
    .pipe(gulp.dest("./"));
    cb(err);
});

gulp.task('browserify', function() {
  return browserify({
    entries: 'main.js',
    debug: true
  })
    .bundle()
    .pipe(fs.createWriteStream("./dist/main.js"));
})

gulp.task('default', ['babel', 'browserify'])