//leetCode 104

function TreeNode(val) {
  this.root = val;
  this.left = this.right = null;
}

const tree = new TreeNode(3);

tree.left = new TreeNode(9);
tree.right = new TreeNode(20);

tree.right.left = new TreeNode(15);
tree.right.right = new TreeNode(7);

//计算树的最大深度
function maxDepth(root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;
    if (!n.left && !n.right) {
      res = Math.max(res, l);
    }
    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };

  dfs(root, 1);
  return res;
}

// console.table(maxDepth(tree));

//计算树的最小深度

function minDepth(root) {
  if (!root) return 0;
  const queue = [[root, 1]];
  while (queue.length) {
    const [n, l] = queue.shift();
    if (!n.left && !n.right) {
      return l;
    }

    if (n.left) queue.push([n.left, l + 1]);
    if (n.right) queue.push([n.right, l + 1]);
  }
}

console.table(minDepth(tree));
