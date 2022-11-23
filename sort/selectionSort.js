//选择排序 升序

Array.prototype.selectionSort = function () {
  let minIndex, temp;
  for (let i = 0; i < this.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < this.length; j++) {
      if (this[j] < this[minIndex]) minIndex = j;
    }
    temp = this[i];
    this[i] = this[minIndex];
    this[minIndex] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];

arr.selectionSort();

console.table(arr);
