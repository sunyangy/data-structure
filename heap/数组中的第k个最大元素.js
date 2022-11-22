//leetCode 215

const MinHeap = require("./MinHeap");

function findKthLarget(nums, k) {
  const heap = new MinHeap();
  nums.forEach((n) => {
    heap.insert(n);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.peek();
}

console.table(findKthLarget([3, 2, 1, 5, 6, 4], 2));
