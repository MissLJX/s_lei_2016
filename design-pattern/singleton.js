var singleton = function(fn) {
  var result;
  return result || (result = fn.apply(this, arguments));
};

var createMask = function() {
  return singleton(function() {
    return document.body.appendChild(document.createElement('div'));
  });
};


var WindowFactory = (function() {

  var _z_index = 100;

  var _createWindow = function() {
    return '<div style="z-index:' + (_z_index++) + ';"></div>';
  };



})();
