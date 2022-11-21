const graph = require("./graph");

//定义一个set来存储已经访问过的节点
const visited = new Set();
const dfs = (n) => {
  //遍历的节点
  console.log(n);
  visited.add(n);
  //遍历其连接的几点
  graph[n].forEach((c) => {
    if (!visited.has(c)) {
      dfs(c);
    }
  });
};

dfs(2);
