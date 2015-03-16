var dest = "./public";
var src = './client';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },

  sass: {
    src: src + "/sass/**/*.{sass,scss}",
    dest: dest,
    settings: {
      indentedSyntax: false,
      imagePath: 'public/assets/images'
    }
  },

  handlebars: {
    src: src + "/templates/**/*.hbs",
    file: src + "/templates/app.hbs",
    destName: 'index.html',
    dest: dest,
    settings: {
      ignorePartials: true,
      batch : [src + '/templates/partials'],
      helpers : {
        log: function(data){
            console.log(data);
        }
      }
    }
  },

  images: {
    src: src + "/images/**",
    dest: dest + "/images"
  },
  
  iconFonts: {
    name: 'Gulp Starter Icons',
    src: src + '/icons/*.svg',
    dest: dest + '/fonts',
    sassDest: src + '/sass',
    template: './gulp/tasks/iconFont/template.sass.swig',
    sassOutputName: '_icons.sass',
    fontPath: 'fonts',
    className: 'icon',
    options: {
      fontName: 'Post-Creator-Icons',
      appendCodepoints: true,
      normalize: false
    }
  },

  browserify: {
    bundleConfigs: [{
      entries: src + '/js/app.js',
      dest: dest,
      outputName: 'app.js',
      extensions: ['.js', '.hbs'], 
    }]
  },

  sprites: {
    src: src + "/sprites/*.png",
    imgDest: dest + "/images",
    sassDest: src + "/sass/gui/",
    settings: {
      imgName: 'sprites.png',
      cssName: '_sprites.scss',
      imgPath: 'images/sprites.png'
    }
  },

  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  },
}