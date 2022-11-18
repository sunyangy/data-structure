//定义树中的节点

function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

//定义树,并赋值 根 节点

function Tree(data) {
  var node = new Node(data);
  this._root = node;
}

//创建一个树

const tree = new Tree("CEO");
// console.log(tree);

console.table({ tree });
