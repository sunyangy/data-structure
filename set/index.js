//数组去重
const arr = [1, 1, 2, 2];
const arr2 = [...new Set(arr)];
console.log(arr2);

//求交集
const set = new Set(arr);
const set2 = new Set([2, 3]);
const set3 = new Set([...set].filter((item) => set2.has(item)));
console.log(set3);
