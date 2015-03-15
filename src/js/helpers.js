var getScrollTop = function(){
  if(typeof pageYOffset != 'undefined'){
    return pageYOffset;
  }
  else{
    var body = document.body;
    var doc = document.documentElement;
    doc = (doc.clientHeight) ? doc : body;
    return doc.scrollTop;
  }
};

module.exports.getScrollTop = getScrollTop;

var getAbsoluteOffset = function($el) {
  var top = 0, 
      left = 0;

  do {
    top += $el.offsetTop  || 0;
    left += $el.offsetLeft || 0;
    $el = $el.offsetParent;
  } while($el);

  return {
    top: top,
    left: left
  };
};

module.exports.getAbsoluteOffset = getAbsoluteOffset;

var getWindowWidth = function(){
  return window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;
}

module.exports.getWindowWidth = getWindowWidth;
 
var getWindowHeight = function(){
  return window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;
}

module.exports.getWindowHeight = getWindowHeight;


