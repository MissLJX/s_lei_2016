var Slider = RichBase.extend({
  EVENTS: {},
  init: function(config) {
    this._config = config;
    this._delegateEvents();
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

  },
  jumpto: function(index) {

  },
  next: function() {},
  pre: function() {}
});
