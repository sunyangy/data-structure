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
    if (this.heap[parentIndex] > this.heap[index]) {
      //交换节点
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  //下移元素
  shiftDown(index) {
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    if (this.heap[index] > this.heap[left]) {
      this.swap(left, index);
      this.shiftDown(left);
    }
    if (this.heap[index] > this.heap[right]) {
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

module.exports = MinHeap;

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);

h.pop();

h.peek();
h.size();
