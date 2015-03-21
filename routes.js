var index = require('./routes/index');
var landingpage = require('./routes/landingpage');
var imprint = require('./routes/imprint');
var sitemaps = require('./routes/sitemaps');


var Routes = function(app){
  app.use(index);
  app.use(imprint);
  app.use(landingpage);
  app.use(sitemaps);
}

module.exports = Routes;