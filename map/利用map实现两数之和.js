//leetCode 1 map实现 时间复杂度，空间复杂度 O(n)

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n1 = nums[i];
    const n2 = target - n1;
    if (map.has(n2)) {
      return [map.get(n2), i];
    } else {
      map.set(n1, i);
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
