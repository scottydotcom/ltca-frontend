function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }

  return arr;
}

let arr = [5, 2, 8, 3, 1, 6, 4];

console.log(`Unsorted array: [${arr}]`); // [5,2,8,3,1,6,4]

console.log(`Sorted array: [${bubbleSort(arr)}]`); // [1,2,3,4,5,6,8]