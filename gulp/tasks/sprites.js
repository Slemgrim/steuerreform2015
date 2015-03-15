var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var imagemin   = require('gulp-imagemin');
var config      = require('../config').sprites;

gulp.task('sprites', function () {
  var spriteData = gulp.src(config.src).pipe(spritesmith(config.settings));

  spriteData.img
    .pipe(imagemin())
    .pipe(gulp.dest(config.imgDest));

  spriteData.css
    .pipe(gulp.dest(config.sassDest));
});