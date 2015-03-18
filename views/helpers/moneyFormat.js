var numeral = require('numeral');

var moneyFormat = function(value){
  if(isNaN(value)){
    return '';
  }

  numeral.language('de', {
      delimiters: {
          thousands: '.',
          decimal: ','
      },
      currency: {
          symbol: '€'
      }
  });

  numeral.language('de');

  return numeral(value).format('0,0[.]00 $');

}

module.exports = moneyFormat;