var express = require('express');
var router = express.Router();

var rates2015 = require('../client/js/taxRates/2015');
var rates2016 = require('../client/js/taxRates/2016');

router.get('/', function(req, res, next) {
  res.render('index', {
    rates2015: rates2015,
    rates2016: rates2016
  });
});

module.exports = router;
