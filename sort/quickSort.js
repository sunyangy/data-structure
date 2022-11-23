Array.prototype.quickSort = function () {
  if (this.length <= 1) return arr;
  let arr1 = [],
    arr2 = [];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < this[0]) {
      arr1.push(this[i]);
    } else {
      arr2.push(this[i]);
    }
  }
  arr1.quickSort(arr1);
  arr2.quickSort(arr2);
  arr1.push(this[0]);
  let res = [];
  res = arr1.concat(arr2);
  res.forEach((n, i) => {
    this[i] = n;
  });
};

const arr = [5, 4, 3, 2, 1];
arr.quickSort();
console.log(arr);
