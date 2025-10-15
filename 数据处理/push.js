// js数组是动态的，引擎层面会做动态扩容
Array.prototype._push = function (...values) {
  for (const val of values) {
    this[this.length] = val;
  }
  return this.length;
};
