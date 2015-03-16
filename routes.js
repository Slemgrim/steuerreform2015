var index = require('./routes/index');
var landingpage = require('./routes/landingpage');
var imprint = require('./routes/imprint');

var Routes = function(app){
  app.use('/', index);
  app.use('/impressum', imprint);
  app.use('/:brutto', landingpage);
}

module.exports = Routes;