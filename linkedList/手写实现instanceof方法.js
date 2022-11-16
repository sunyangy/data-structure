//如果A原型链指向的对象有B，则A是B的实例，即 A instanceof B 为 true
function myInstanceOf(a, b) {
  let node = a;
  while (node) {
    if (node === b.prototype) return true;
    node = node.__proto__;
  }
  return false;
}

console.log(myInstanceOf([], Object));
console.log(myInstanceOf({}, Array));
console.log(myInstanceOf({}, Object));
