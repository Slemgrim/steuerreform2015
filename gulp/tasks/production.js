var gulp = require('gulp');
gulp.task('production', ['handlebars', 'images', 'sprites', 'minifyCss', 'uglifyJs', 'minifyHtml']);