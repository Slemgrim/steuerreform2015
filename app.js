var express = require('express');
var app = express();
var path = require('path');
var exphbs  = require('express3-handlebars');

app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: 'hbs',
  partialsDir: "views/partials/"
}));
 
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})