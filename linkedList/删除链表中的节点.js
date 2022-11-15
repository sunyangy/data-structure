var ListNode = function (val) {
  this.val = val;
  this.next = null;
};

const a = new ListNode("a");

const b = new ListNode("b");

const c = new ListNode("c");

a.next = b;
b.next = c;

//删除链表中点节点
var deleteNode = function (node) {
  if (node.next) {
    console.log(1);
    node.val = node.next.val;
    node.next = node.next.next;
  } else {
    console.log("删除的是链表的最后一个节点，不允许删除");
  }
};

deleteNode(c);
