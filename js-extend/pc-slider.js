/**
  自定义事件
  rendercompleted
  imagechanged
**/

var Slider = RichBase.extend({
  EVENTS: {},
  init: function(config) {
    this._config = config;
    this._delegateEvents();
    this.fire('rendercompleted');
  },
  render: function(collections) {
    if (!collections || collections.length <= 0) return;
    var __this = this,
      sliders = [],
      collection;
    sliders.push('<div class="sliders">');
    for (var i = 0, len = collections.length; i < len; i++) {
      collection = collections[i];
      sliders.push('<a href="' + collection.url +
        '" class="slider" style="width:' + __this.get("sliderWidth") +
        ';height:' + __this.get("sliderHeight") +
        ';display:block;background-image:url(' + collection.image +
        ');background-repeat:no-repeat;background-size:100%;background-position:center;"></a>'
      );
    }
    sliders.push('</div>');
    __this.get('parentNode').append(sliders.join(''));
    this.fire('rendercompleted');
  },
  jumpto: function(index) {
    var __this = this;
    __this.fire('imagechanged', index);
  },
  next: function() {
    var __this = this;
    __this.fire('imagechanged', index);
  },
  pre: function() {
    var __this = this;
    __this.fire('imagechanged', index);
  }
});
