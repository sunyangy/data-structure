const tree = {
  val: 1,
  children: [
    {
      val: 2,
      children: [
        {
          val: 4,
          children: [],
        },
        {
          val: 5,
          children: [],
        },
      ],
    },
    {
      val: 3,
      children: [
        {
          val: 6,
          children: [],
        },
        {
          val: 7,
          children: [],
        },
      ],
    },
  ],
};

//深度优先遍历

const dfs = (root) => {
  console.log(root.val);
  root.children.forEach(dfs);
};

dfs(tree);
console.log("----------------");

//广度优先遍历

const bfs = (root) => {
  //定义一个队列
  const queue = [root];
  while (queue.length > 0) {
    //出队列
    const n = queue.shift();
    console.log(n.val);

    //
    n.children.forEach((child) => {
      queue.push(child);
    });
  }
};

bfs(tree);
