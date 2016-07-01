var singleton = function(fn){
  var result;
  return result || (result = fn.apply(this , arguments));
};

var createMask = function(){
  return singleton(function(){
    return document.body.appendChild(document.createElement('div'));
  });
};
