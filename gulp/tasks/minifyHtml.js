var gulp       = require('gulp');
var config     = require('../config').production;
var minifyHTML = require('gulp-minify-html');
 
gulp.task('minifyHtml', function() {
  var opts = {
    comments: true,
    spare: true
  };
    
  gulp.src(config.dest + '**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('.'))
});