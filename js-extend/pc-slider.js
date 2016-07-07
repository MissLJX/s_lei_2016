/**
  自定义事件
  rendercompleted
  imagechanged
**/

var Slider = RichBase.extend({
  _waitings: [],
  _displaying: null,
  _displayed: [],
  EVENTS: {
    '#next-btn': {
      'click': function(__this, this, event) {
        __this.next();
      }
    },
    '#pre-btn': {
      'click': function(__this, this, event) {
        __this.pre();
      }
    }
  },
  init: function(config) {
    this._config = config;
    this._delegateEvents();
    this.fire('rendercompleted');
  },

  initDisplays: function(collections) {
    this._displaying = this._createSlider(collections[0]);
    if (collections && collections.length > 1) {
      for (var i = 1, len = collections.length; i < len; i++) {
        this._waitings.push(this._createSlider(collections[i]));
      }
    }
  },

  _createDisplayer: function() {
    var __this = this;
    var displayer = '<div></div>';
  },
  _createSlider: function(collection) {
    return '<div class="slider"></div>';
  },

  getCurrentIndex: function() {
    return this.currentIndex ? (++this.currentIndex) : (this.currentIndex =
      0);
  },
  jumpto: function(index) {
    var __this = this;

  },
  next: function() {
    var __this = this;
    __this._displayed.push(__this.displaying);
    __this.displaying = __this._waitings.shift();

  },
  pre: function() {
    var __this = this;

  }
});
