var Tree = function () {
  var Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  //根节点
  var root = null;

  //插入节点
  var insertNode = function (node, newNode) {
    if (newNode.value > node.value) {
      //新节点大于节点，往右走
      if (node.right === null) {
        node.right = newNode;
      } else {
        //递归插入字节点
        insertNode(node.right, newNode);
      }
    } else if (newNode.value < node.value) {
      //新节点小于节点，往左走
      if (node.left === null) {
        node.left = newNode;
      } else {
        //递归插入子节点
        insertNode(node.left, newNode);
      }
    }
  };

  this.insert = function (value) {
    var newNode = new Node(value);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  //搜索节点
  this.search = function (value) {};

  //遍历节点
  this.traverse = function (value) {};

  //删除节点

  this.remove = function (value) {};

  //获取根节点
  this.getRoot = function () {
    return root;
  };
};

var t = new Tree();

t.insert(8);
t.insert(9);
t.insert(2);
t.insert(3);

console.log(t.getRoot());
