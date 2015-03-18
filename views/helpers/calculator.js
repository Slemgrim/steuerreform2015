var moneyFormat = require('./moneyFormat');
var taxCalc = require('../../client/js/calculator');

var Calculator = function(brutto, rates){
  var calc = new taxCalc(rates)
  var taxValue = calc.calc(brutto);

  if(taxValue <= 0){
    return '';
  }

  return moneyFormat(taxValue);
}

module.exports = Calculator;