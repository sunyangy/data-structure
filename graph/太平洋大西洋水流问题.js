/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  //意外情况
  if (!heights || !heights[0]) {
    return [];
  }
  const m = heights.length;
  const n = heights[0].length;

  //创建两个矩阵，分别存储流向太平洋和大西洋的数据的数据
  const flow1 = Array.from({ length: m }, () => new Array(n).fill(false));
  const flow2 = Array.from({ length: m }, () => new Array(n).fill(false));

  //深度遍历
  const dfs = (r, c, flow) => {
    flow[(r, c)] = true;

    //遍历周围的节点
    [
      [r - 1, c],
      [r + 1, c],
      [r, c - 1],
      [r, c + 1],
    ].forEach(([nr, nc]) => {
      if (
        //下一个节点必须在矩阵中
        nr >= 0 &&
        nr < m &&
        nc >= 0 &&
        nc < n &&
        // 防止死循环,即访问的节点之前都已访问过
        !flow[nr][nc] &&
        //保证逆流而上
        heights[nr][nc] >= heights[r][c]
      ) {
        dfs(nr, nc, flow);
      }
    });
  };

  //沿着海岸线逆流而上
  for (let r = 0; r < m; r += 1) {
    dfs(r, 0, flow1);
    dfs(r, n - 1, flow2);
  }
  for (let c = 0; c < n; c += 1) {
    dfs(0, c, flow1);
    dfs(m - 1, c, flow2);
  }
  //收集到能流到两个大洋里的坐标
  const res = [];
  for (let r = 0; r < m; r += 1) {
    for (let c = 0; c < n; c += 1) {
      if (flow1[r][c] && flow2[r][c]) {
        res.push([r, c]);
      }
    }
  }
  return res;
};

console.log(
  pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4],
  ])
);
