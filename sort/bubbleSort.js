//冒泡排序，升序
Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};

const arr = [2, 3, 1, 5, 3, 6, 4, 7, 53, 4, 65, 3];

arr.bubbleSort();

console.table(arr);
