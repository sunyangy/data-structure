const obj = {};
const func = () => {};
const arr = [];

//如果A原型链指向的对象有B，则A是B的实例，即 A instanceof B 为 true
//如果一个对象要查找x属性，会一直沿着原型链查找

Object.prototype.x = 2;

console.log(obj.x);
