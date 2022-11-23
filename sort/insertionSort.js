Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let currentValue = this[i];
    let j = i - 1;
    while (j >= 0 && currentValue < this[j]) {
      this[j + 1] = this[j];
      j--;
    }
    this[j + 1] = currentValue;
  }
};

const arr = [5, 4, 3, 2, 1];

arr.insertionSort();
console.log(arr);
