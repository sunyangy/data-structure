// leetCode 349 利用Map 实现

function intersection(arr1, arr2) {
  const map = new Map();
  //给map中添加arr1的元素
  arr1.forEach((item) => map.set(item, true));

  const result = [];
  //循环遍历arr2的元素，找出和arr1中相同的元素
  arr2.forEach((item) => {
    if (map.get(item)) {
      result.push(item);
      map.delete(item);
    }
  });

  return result;
}

console.log(intersection([1, 2, 3, 3], [2, 3, 3]));
