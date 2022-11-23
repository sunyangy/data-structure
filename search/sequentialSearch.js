Array.prototype.sequentialSearch = function (target) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === target) {
      return i;
    }
  }
  return -1;
};

const arr = [1, 2, 3, 4, 5];

arr.sequentialSearch(3);
