//leetCode 20 利用map 和 stack 集合实现

function isValid(s) {
  //括号个数为奇数，直接返回
  if (isValid % 2 === 1) return false;

  const map = new Map();
  map.set("(", ")").set("{", "}").set("[", "]");
  //定义栈
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid("({[]})"));
