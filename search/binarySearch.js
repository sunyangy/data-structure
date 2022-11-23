Array.prototype.binarySearch = function (target) {
  let low = 0;
  let high = this.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const e = this[mid];
    if (e > target) {
      high = mid - 1;
    } else if (e < target) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5];

const r = arr.binarySearch(2);
console.log(r);
