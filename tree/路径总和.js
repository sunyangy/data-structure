// leetCode 112

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);

tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

//路径综合

function hasPathSum(root, sum) {
  if (!root) return false;
  let res = false;

  const dfs = (n, s) => {
    if (!n.left && !n.right && s === sum) {
      res = true;
    }
    if (n.left) dfs(n.left, s + n.left.val);
    if (n.right) dfs(n.left, s + n.right.val);
  };

  dfs(root, root.val);
  return res;
}

console.table(hasPathSum(tree, 12));
