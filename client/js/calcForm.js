var CalcForm = function($form, callback){

  var $brutto = $form.querySelector('[name=brutto]'),
      debounce = 400,
      debounceTimeout = false;

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
    $form.addEventListener('submit', onCalculate);
    $brutto.addEventListener('keyup', onCalculate);
  };

  var onCalculate = function(event){
    event.preventDefault();
    var brutto = parseFloat($brutto.value.trim());

    if(callback == undefined){
      return;
    }

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(function(){
      if(isValid(brutto)){
        callback({
          success: true,
          brutto: {
            year: brutto * 12,
            month: brutto
          }
        });
      } else {
        callback({
          success: false
        });
      }
    }, debounce);
  };

  var formatNumber = function(number){
    number = number.replace(/\./g, '');
    number = number.replace(',', '.');
    return number;
  };

  var isValid = function(number){
    if(isNaN(number) || number <= 0){
      return false;
    }

    return true;
  };


  init();
}

module.exports = CalcForm;