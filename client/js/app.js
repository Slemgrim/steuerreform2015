var Helpers    = require('./helpers');
var Calculator = require('./calculator');
var CalcForm   = require('./calcForm');
var Result     = require('./result');

var rates2015 = require('./taxRates/2015');
var rates2016 = require('./taxRates/2016');

var calc2015 = new Calculator(rates2015);
var calc2016 = new Calculator(rates2016);

var $calcForm = document.querySelector('.calculator');
var $result = document.querySelector('.result');

var result = new Result($result);
var calcForm = new CalcForm($calcForm, function(inputs){
  
  var tax2015 = calc2015.calc(inputs.brutto.year);
  var tax2016 = calc2016.calc(inputs.brutto.year);
  var diff = tax2015 - tax2016;

  if(diff == 0){
    return;
  }

  result.set({
    y2015: {
      brutto: inputs.brutto.year,
      tax: tax2015
    },
    y2016: {
      brutto: inputs.brutto.year,
      tax: tax2016
    },
    diff: diff
  });

  if(!isNaN(diff)){
    result.show();
  } else {
    result.hide();
  }
});

