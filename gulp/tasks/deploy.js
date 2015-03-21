var gulp = require('gulp');

gulp.task('deploy', ['sass', 'images', 'sprites', 'minifyCss', 'uglifyJs', 'minifyHtml']);