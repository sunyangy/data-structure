//leetCode 141

function LinkedNode(val) {
  this.val = val;
  this.next = null;
}

const a = new LinkedNode(3);

const b = new LinkedNode(2);

const c = new LinkedNode(0);

const d = new LinkedNode(4);

a.next = b;
b.next = c;
c.next = d;

d.next = b;

function hasCycle(head) {
  let quick = head;
  let slow = head;
  while (quick && slow && quick.next) {
    quick = quick.next.next;
    slow = slow.next;
    if (slow === quick) {
      return true;
    }
  }
  return false;
}

console.log(hasCycle(a));
