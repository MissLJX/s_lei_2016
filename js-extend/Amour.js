/**常量**/
var Constants = (function() {
  var _constants = {
    _VERSION: 'v5',
    _APP_VERSION: '2.7.1'
  };

  var constants = function() {};

  constants.get = function(key) {
    return _constants[key];
  }

  return constants;
})();

console.log(Constants.get('_VERSION'));

//继承实例 方法01
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
};

function Author(name, books) {
  Person.call(this, name);
  this.books = books;
}

Author.prototype = new Persion();
Author.prototype.constructor = Author;
Author.prototype.getBooks = function() {
  return this.books;
};

//继承实例 方法02  就是 方法01
function extend(subClass, superClass) {
  var F = function() {}
  F.prototype = superClass.prototype;
  subClass = new F();
  subClass.prototype.constructor = subClass;
}

function Author(name, books) {
  Persion.call(this, name);
  this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function() {
  return this.books;
};

//改写一下   上面的Persion.call(this, name);耦合太强

function extend(subClass, superClass) {
  var F = function() {}
  F.prototype = superClass.prototype;
  subClass = new F();
  subClass.prototype.constructor = subClass;
  subClass.super = superClass.prototype;
  if (superClass.prototype.constructor == Object.prototype.constructor)
    superClass.prototype.constructor = superClass;
}

function Author(name, books) {
  Author.super.constructor.call(this, name);
  this.books = books;
}

extend(Author, Person);

Author.prototype.getBooks = function() {
  return this.books;
};
