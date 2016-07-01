forEach = function(arr, fn) {
  for (var i = 0, len = arr.length; i < len; i++) {
    var c = arr[i];
    fn.call(c , i , c);
  }
};

forEach([1,2,3],function(i , n){
  console.log('i='+i+';n='+n);
});
