const stack = ["apple", "banana"];

//获取元素
const stackInput = document.getElementById("stack-input");
const stackCont = document.getElementById("stack-cont");
const pushBtn = document.getElementById("push-btn");
const popBtn = document.getElementById("pop-btn");
const fontBtn = document.getElementById("font-btn");
const emptyBtn = document.getElementById("empty-btn");

//展示数据
window.addEventListener("DOMContentLoaded", () => {
  stackCont.textContent = stack.join("->");
});

//进栈
pushBtn.addEventListener("click", () => {
  const value = stackInput.value;

  value.trim() !== "" ? stack.unshift(value) : "";
  stackCont.textContent = stack.join("->");
  stackInput.value = "";
});

//出栈
popBtn.addEventListener("click", () => {
  //   const value = stackInput.value;
  stack.shift();
  stackCont.textContent = stack.join("->");
});

//打印栈顶元素内容
fontBtn.addEventListener("click", () => {
  stackCont.textContent = stack[0];
});

//判断栈是否为空
emptyBtn.addEventListener("click", () => {
  const empty = stack.length > 0 ? false : true;
  stackCont.textContent = empty;
});
