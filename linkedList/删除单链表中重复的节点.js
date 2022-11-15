//定义节点
function LinkedNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//
const a = new LinkedNode(1);

const b = new LinkedNode(1);

const c = new LinkedNode(1);

a.next = b;

b.next = c;

function deleteRepeatNode(node) {
  let p = node;
  while (p && p.next) {
    if (p.val === p.next.val) {
      p.next = p.next.next;
    } else {
      p = p.next; //指向下一个元素
    }
  }
  return node;
}

console.log(deleteRepeatNode(a));
