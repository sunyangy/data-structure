//leetCode 347

//下面解法是实现一个堆，来辅助求解。//目前通不过，解法有纰漏

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  //交换节点
  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  //获取父节点
  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  //上移元素
  shiftUp(index) {
    if (index === 0) return;
    //获取其父节点
    const parentIndex = this.getParentIndex(index);
    if (
      this.heap[parentIndex] &&
      this.heap[parentIndex].value > this.heap[index].value
    ) {
      //交换节点
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  //下移元素
  shiftDown(index) {
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    if (this.heap[index].value > this.heap[left] && this.heap[left].value) {
      this.swap(left, index);
      this.shiftDown(left);
    }
    if (this.heap[index].value > this.heap[right] && this.heap[right].value) {
      this.swap(right, index);
      this.shiftDown(right);
    }
  }

  //获取左侧子节点的下标
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  //获取右侧子节点
  getRightIndex(index) {
    return 2 * index + 2;
  }

  //插入方法
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  //删除堆顶
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  //获取堆顶
  peek() {
    return this.heap[0];
  }
  //获取堆的大小
  size() {
    return this.heap.length;
  }
}
var topKFrequent = function (nums, k) {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });

  const h = new MinHeap();

  map.forEach((value, key) => {
    h.insert({ value, key });
    if (h.size() > k) {
      h.pop();
    }
  });
  return h.heap.map((n) => n.key);
};
