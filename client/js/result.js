 var Result = function($element){

  var elements = {
      diff: $element.querySelector('.data-diff'),
      brutto2015: $element.querySelector('.data-brutto-2015'),
      brutto2016: $element.querySelector('.data-brutto-2016'),
      tax2015: $element.querySelector('.data-tax-2015'),
      tax2016: $element.querySelector('.data-tax-2016')
  };

  this.show = function(){
    $element.classList.add('show');
  };

  this.hide = function(){
    $element.classList.remove('show');
  }

  this.set = function(data){
    elements.diff.innerHTML = numberFormat(data.diff);
    elements.brutto2015.innerHTML = numberFormat(data.y2015.brutto);
    elements.brutto2016.innerHTML = numberFormat(data.y2016.brutto);
    elements.tax2015.innerHTML = numberFormat(data.y2015.tax);
    elements.tax2016.innerHTML = numberFormat(data.y2016.tax); 
  };

  var numberFormat = function(value){
    if(isNaN(value)){
      return '';
    }

    value = Math.round(value * 100) / 100;
    value = value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
    return value; 
  };
}

module.exports = Result;