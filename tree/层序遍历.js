// leetCode 102
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);

tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

//层序遍历
function levelOrder(root) {
  if (!root) return [];
  const q = [[root, 0]];
  const res = [];
  while (q.length) {
    const [n, level] = q.shift();
    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }
    if (n.left) q.push([n.left, level + 1]);
    if (n.right) q.push([n.right, level + 1]);
  }
  return res;
}

console.log(levelOrder(tree));
