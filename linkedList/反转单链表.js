//定义一个节点
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(3);
const d = new ListNode(4);
const e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// console.log(a);

var reverseList = function (head) {
  let pre = null;
  let curr = head;

  while (curr) {
    const next = curr.next;
    curr.next = pre;
    pre = curr;
    curr = next;
  }
  return pre;
};

console.log(reverseList(a));
