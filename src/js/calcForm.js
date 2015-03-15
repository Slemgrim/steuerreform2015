var CalcForm = function($form, callback){

  var $brutto = $form.querySelector('[name=brutto]');

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
    $form.addEventListener('submit', onCalculate);
    $brutto.addEventListener('keyup', onCalculate);
  };

  var onCalculate = function(event){
    event.preventDefault();
    var brutto = $brutto.value.trim();

    var isValid = true; //TODO: check for positive int/float

    if(isValid && callback !== undefined){
      callback({
        brutto: {
          year: brutto * 12,
          month: brutto
        }
      });
    }

  };

  init();
}

module.exports = CalcForm;