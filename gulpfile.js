var gulp = require("gulp");
var babel = require("gulp-babel");
var rename = require("gulp-rename");
var browserify = require("browserify");
var fs = require("fs");

gulp.task("default", function () {
  return gulp.src("app.js")
    .pipe(babel())
    .pipe(rename('main.js'))
    .pipe(gulp.dest("./"));
});

gulp.task('browserify', function() {
  return browserify({
    entries: 'main.js',
    debug: true
  })
    .bundle()
    .pipe(fs.createWriteStream("./dist/main.js"));
})
