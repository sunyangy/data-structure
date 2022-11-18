// 76 leetCode 使用Map
// 切记 字典中的元素是唯一的

const minWindow = function (s, t) {
  //定义两个指针
  let l = 0;
  let r = 0;
  //利用map存储 要查找的最小覆盖字串
  const need = new Map();
  for (let i of t) {
    need.set(i, need.has(i) ? need.get(i) + 1 : 1);
  }

  //存储最小字符串
  let res = "";

  let needType = need.size;
  //移动右指针
  while (r < s.length) {
    //获取指针指向的字符
    const c = s[r];
    //判断该字符是否是字典中的字符 是的话字典去除该字符
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      //找到所有某一字符
      if (need.get(c) === 0) needType--;
    }
    //如果找到了所有的字符
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (newRes.length < res.length || !res) res = newRes;
      //移动左指针
      const c2 = s[l];

      //判断滑动窗口中要寻找的字符是否正好是左指针指向的字符
      if (need.has(c2)) {
        //指向的字符个数+1
        need.set(c2, need.get(c2) + 1);
        //同时 左指针指向的元素正好是 唯一的元素
        if (need.get(c2) === 1) {
          needType++;
        }
      }

      l++;
    }

    r++;
  }
  return res;
};

console.table(minWindow("ANCBSSJIFS", "ABC"));
