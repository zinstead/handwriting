function SupperFn(...args) {
  this.fn1 = () => {
    console.log("fn1");
  };
}

function SubFn(...args) {
  this.fn2 = () => {
    console.log("fn2");
  };
}

// 原型链继承：缺点是父类属性被子类实例共享（引用类型共享）
SubFn.prototype = new SupperFn();
// 修复constructor指向，否则导致子类的类型改变
SubFn.prototype.constructor = SubFn;

// 借用构造函数：缺点是无法复用父类原型的方法
function SubFn(...args) {
  SupperFn.call(this, ...args);
}

// 组合继承：缺点是调用两次父类的构造函数，导致属性重复和性能损失
function SubFn(...args) {
  SupperFn.call(this, ...args);
}
SubFn.prototype = new SupperFn();
SubFn.prototype.constructor = SubFn;

// 寄生组合继承：完美解决，是es6类继承的语法糖
function SubFn(...args) {
  SupperFn.call(this, ...args);
}
SubFn.prototype.constructor = SubFn;
SubFn.prototype = Object.create(SupperFn.prototype);
