const buttons = document.querySelectorAll("button");
const showArray = document.getElementById("showArray");
const showSortProcess = document.getElementById("showSortProcess");

console.log(buttons);

let arr = [];
//随机生成15个数的数组
function randomArray() {
  for (let i = 0; i < 15; i++) {
    arr.push(Math.ceil(Math.random() * 20));
  }
  return arr;
}

buttons[0].addEventListener("click", () => {
  arr = [];
  showArray.textContent = randomArray();
});

//冒泡排序
buttons[1].addEventListener("click", (event) => {
  console.log(event);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  showArray.textContent = arr;
});

//选择排序
buttons[2].addEventListener("click", () => {
  let len = arr.length;
  let temp, minIndex;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  showArray.textContent = arr;
});

//插入排序
buttons[3].addEventListener("click", () => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let preIndex = i - 1;
    while (preIndex >= 0 && currentValue < arr[preIndex]) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = currentValue;
  }
  showArray.textContent = arr;
});

//快速排序
buttons[4].addEventListener("click", () => {
  showArray.textContent = quickSort(arr);
});

//快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  var arr1 = [],
    arr2 = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr1.push(arr[i]);
    } else {
      arr2.push(arr[i]);
    }
  }
  arr1 = quickSort(arr1);
  arr2 = quickSort(arr2);
  arr1.push(arr[0]);
  return arr1.concat(arr2);
}
