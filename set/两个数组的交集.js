//leetcode 349
function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const arr = arr1.filter((item) => set2.has(item));
  const result = [...new Set(arr)];
  return result;
}

const set = new Set([2, 3, 4]);
const myArray = Array.from(set);
console.log(myArray);

intersection([1, 2, 2, 1], [2, 2]);
