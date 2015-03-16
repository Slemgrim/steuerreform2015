var gulp     = require('gulp');
var config   = require('../config');
var watchify = require('./browserify')

gulp.task('watch', ['watchify'], function(callback) {
  gulp.watch(config.sass.src,       ['sass']);
  gulp.watch(config.images.src,     ['images']);
  gulp.watch(config.handlebars.src, ['handlebars']);
});