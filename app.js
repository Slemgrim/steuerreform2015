var express = require('express');
var app = express();
var path = require('path');
var exphbs  = require('express3-handlebars');
var Routes = require('./routes');

/* Helpers */
var moneyFormat = require('./views/helpers/moneyFormat');
var calculator = require('./views/helpers/calculator');

var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: "views/partials/",
    helpers: {
        moneyFormat: moneyFormat,
        calculator: calculator
    }
});

app.engine('hbs', hbs.engine);
 
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

var routes = new Routes(app);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})