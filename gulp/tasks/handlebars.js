var gulp         = require('gulp');
var handlebars   = require('gulp-compile-handlebars');
var rename       = require('gulp-rename');
var config       = require('../config').handlebars;
var browserSync  = require('browser-sync');
var data         = require('../../content.json');

gulp.task('handlebars', function () {
  var templateData = data,
  options = config.settings

  return gulp.src(config.file)
    .pipe(handlebars(templateData, options))
    .pipe(rename(config.destName)) 
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true})); 
});