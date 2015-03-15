var odometer = require('../../node_modules/odometer/odometer');
 
var Result = function($element){

  var elements = {
      diff: $element.querySelector('.data-diff'),
      brutto2015: $element.querySelector('.data-brutto-2015'),
      brutto2016: $element.querySelector('.data-brutto-2016'),
      tax2015: $element.querySelector('.data-tax-2015'),
      tax2016: $element.querySelector('.data-tax-2016')
  };

  var init = function(){
    for (var element in elements) {
      if (elements.hasOwnProperty(element)) {
        new Odometer({
          el: elements[element],
          duration: 100,
          format: '(.ddd),dd'
        });
      }
    }
  };

  this.show = function(){
    $element.classList.add('show');
  };

  this.set = function(data){
    elements.diff.innerHTML = data.diff;
    elements.brutto2015.innerHTML = data.y2015.brutto;
    elements.brutto2016.innerHTML = data.y2016.brutto;
    elements.tax2015.innerHTML = data.y2015.tax;
    elements.tax2016.innerHTML = data.y2016.tax; 
  };

  init();
}

module.exports = Result;