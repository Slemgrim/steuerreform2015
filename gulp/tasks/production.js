var gulp = require('gulp');
gulp.task('production', ['images', 'sprites', 'minifyCss', 'uglifyJs', 'minifyHtml']);