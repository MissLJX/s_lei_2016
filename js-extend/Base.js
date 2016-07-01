var Class = (function() {
  var _mix = function(r, s) {
    for (p in s) {
      if (s.hasOwnProptery(p)) {
        r[p] = s[p];
      }
    }
  };
  var _extend = function() {
    this.initProperty = true;
    var prototype = new this();
    this.initProperty = false;
    var items = Array.prototype.slice.call(arguments),
      item;
    while (item = items.shift()) {
      _mix(prototype, item);
    }

    function SubClass() {
      if (!SubClass.initProperty && this.init) {
        this.init.apply(this, arguments);
      }
    }
    SubClass.prototype = prototype;
    SubClass.extend = _extend;
    SubClass.prototype.constructor = SubClass;
    return SubClass;
  };
  var Class = function() {};
  Class.extend = _extend;
  return Class;
})();

var _indexOf = function(s, arrays) {
  if (!arrays || arrays.length <= 0) return -1;
  for (var i = 0, len = arrays.length; i < len; i++)
    if (s === arrays[i]) return i;
  return -1;
};

/**观察者模式**/
var Event = Class.extend({
  on: function(key, listener) {
    if (!this._events) this._events = {};
    if (!this._events[key]) this._events[key] = [];
    if (_indexOf(listener, this._events[key]) < 0 && typeof listener ===
      'function')
      this._events[key].push(listener);
    return this;
  },
  fire: function(key) {
    if (!this._events || !this._events) return;
    var args = Array.prototype.slice.call(arguments, 1),
      listeners = this._events[key];
    for (var i = 0, len = listeners.length; i < len; i++)
      listeners[i].apply(this, args);
    return this;
  },
  off: function(key, listener) {
    if (!key && !listener) this._events = {};
    if (key && !listener) this._events[key] = [];
    if (key && listener) {
      var listeners = this._events[key],
        index = _indexOf(listener, listeners);
      index > 0 && listeners.splice(index, 1);
    }
    return this;
  }
});

var Base = Class.extend(Event, {
  init: function(config) {
    this._config = config;
    this.bind();
    this.render();
  },
  get: function(key) {
    return this._config[key];
  },
  set: function(key, obj) {
    this._config[key] = obj;
  },
  bind: function() {},
  destory: function() {
    this.off();
  }

});

/**支持jQuery事件**/
var RichBase = Base.extend({
  EVENTS: {},
  init: function(config) {
    this._config = config;
    this.render();
    this._delegateEvents();
  },
  _delegateEvents: function() {
    var __this = this,
      events = __this.EVENTS || {},
      selector, eventObjs, type, fn, parentNode = __this.get('parentNode');
    for (selector in events) {
      eventObjs = events[selector];
      for (type in eventObjs) {
        fn = eventObjs[type];
        //重点   作用域问题  必须加上匿名函数  否则fn永远为最后一个fn
        (function() {
          parentNode.on(type, selector, function(event) {
            fn.call(null, __this, this, event);
          });
        })();
      }
    }
  },
  destory: function() {
    var __this = this,
      events = __this.EVENTS || {},
      selector, eventObjs, type, fn, parentNode = __this.get('parentNode');
    parentNode.remove();
    __this.off();
    for (selector in events) {
      eventObjs = events[selector];
      for (type in eventObjs) {
        fn = eventObjs[type];
        parentNode.off(selector, type, fn);
      }
    }
  }
});
