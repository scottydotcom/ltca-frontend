function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

let arr = [9, 2, 5, 3, 25, 19, 4];

console.log(`Unsorted array: [${arr}]`); // [9,2,5,3,25,19,4]

console.log(`Sorted array: [${insertionSort(arr)}]`); // [2,3,4,5,9,19,25]