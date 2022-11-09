const queue = ["apple", "orange", "banana"];

const queueCont = document.querySelector("#queue-cont");

queueCont.textContent = queue.join("->");
//选取元素
const inBtn = document.getElementById("in-btn");
const outBtn = document.getElementById("out-btn");
const fontBtn = document.getElementById("font-btn");
const emptyBtn = document.getElementById("empty-btn");
//入队
inBtn.addEventListener("click", () => {
  const randomFruit = Math.floor(Math.random() * queue.length);
  queue.unshift(queue[randomFruit] || "apple");
  queueCont.textContent = queue.join("->");
});

//出队
outBtn.addEventListener("click", () => {
  console.log(2);
  if (queue.length > 0) {
    queue.pop();
  }
  queueCont.textContent = queue.join("->");
});

//打印对头元素内容
fontBtn.addEventListener("click", () => {
  const fontContent = queue[queue.length - 1];
  queueCont.textContent = fontContent;
});

//判断队列是否为空
emptyBtn.addEventListener("click", () => {
  console.log(3);
  const isEmpty = queue.length > 0 ? false : true;
  queueCont.textContent = isEmpty;
});

//展示数据
// function showQueue(arr) {
//   arr = arr.join("->");
//   console.log(arr);
// }

// const arr2 = [1, 2];

// showQueue(arr2);
