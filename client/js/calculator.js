var Calculator = function(rates){
  var init = function(){ 

  };

  /**
  * @param brutto yearly brutto income
  * @return payroll tax
  **/
  this.calc = function(brutto){
    var taxParts = [];
    rates.forEach(function(rate){
      var rateTax = getRate(rate, brutto);
      taxParts.push(rateTax);
    });

    return sumTaxes(taxParts);
  };

  var getRate = function(rate, brutto){
    if(rateIsToHight(rate, brutto)){
      return 0;
    }

    var calcBase = 0;

    if(rate.max < brutto && rate.max !== null){
      calcBase = rate.max - rate.min;
    } else {
      calcBase = brutto - rate.min;
    }

    var tax = calcBase * (rate.tax / 100);

    return tax;
  };

  var rateIsToHight = function(rate, brutto){
    if(rate.min >= brutto){
      return true;
    }
    return false;
  };

  var sumTaxes = function(taxes){
    return taxes.reduce(function(pv, cv){ 
      return pv + cv; 
    }, 0);
  };

  init();
}

module.exports = Calculator;