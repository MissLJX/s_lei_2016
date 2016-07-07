function Countdown(start, end) {
  var left = end - start,
    hr = 1000 * 60 * 60,
    mr = 1000 * 60;

  var _hour = Math.floor(left / hr),
    _minute = Math.floor((left % hr) / mr),
    _second = Math.floor((left % mr) / 1000);

  var _timer = function(hour, minute, second) {
    this.h1 = hour >= 10 ? Math.floor(hour / 10) : 0;
    this.h2 = hour % 10;
    this.m1 = minute >= 10 ? Math.floor(minute / 10) : 0;
    this.m2 = minute % 10;
    this.s1 = second >= 10 ? Math.floor(second / 10) : 0;
    this.s2 = second % 10;
  }

}

Countdown.prototype = {
  counting: function() {
    var __this = this;
    setInterval(function() {
      __this.changeTime();
    }, 1000);
  },
  changeTime: function() {
    if (this.s2 > 0) {
      this.s2--;
    } else {
      this.s2 = 9;
      if (this.s1 > 0) {
        this.s1--;
      } else {
        this.s1 = 5;
        if ()
      }
    }

  }
};
