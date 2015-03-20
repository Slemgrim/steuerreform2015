var express = require('express');
var router = express.Router();
var Calculator = require('../client/js/calculator');
var rates2015 = require('../client/js/taxRates/2015');
var rates2016 = require('../client/js/taxRates/2016');
var calc2015 = new Calculator(rates2015);
var calc2016 = new Calculator(rates2016);

router.get('/brutto/:brutto', function(req, res, next) {

  var bruttoYear = req.params.brutto * 12;
  var tax2015 = calc2015.calc(bruttoYear);
  var tax2016 = calc2016.calc(bruttoYear);
  var diff = tax2015 - tax2016;
  var show = true;

  if(isNaN(diff)){
    show = false;
  }

  res.render('landingpage', {
    show: show,
    brutto: req.params.brutto,
    brutto2015: bruttoYear,
    brutto2016: bruttoYear,
    tax2015: tax2015,
    tax2016: tax2016,
    diff: diff,
    more: getMore(req.params.brutto)
  });
});

var getMore = function(brutto){
  var brutto = parseFloat(brutto);

  var values = [];
  var min = 920;
  var steps = 10;
  var count = 10;

  if(brutto + steps * count / 2 * -1 < 900){
    brutto = 1500;
  }

  for(var i = count / 2 * -1; i < count / 2; i++){
    values.push(brutto + i * steps);
  }

  var more = [];

  values.forEach(function(value){
    var bruttoYear = value * 12;
    var tax2015 = calc2015.calc(bruttoYear);
    var tax2016 = calc2016.calc(bruttoYear);
    var diff = tax2015 - tax2016;

    more.push({
      brutto: value,
      tax2015: tax2015,
      tax2016: tax2016,
      diff: diff
    });
  });

  return more;
}

module.exports = router;
