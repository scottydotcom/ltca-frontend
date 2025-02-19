```js
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}

const arr = [64, 25, 12, 22, 11];

console.log(`Unsorted array: ${arr}`);
arraySorted = selectionSort(arr);
console.log(`Sorted array: ${arraySorted}`);
```
**1. Outer Loop** 
```js
for (let i = 0; i < array.length - 1; i++) {
  //...
}
```
The outer loop iterates array.length - 1 times, starting from the first element of the array. This is because we don't need to sort the last element, as it will be in its correct position after the previous iterations.

**2. Inner Loop** 
```js
let minIndex = i;
for (let j = i + 1; j < array.length; j++) {
  if (array[j] < array[minIndex]) {
    minIndex = j;
  }     
}
```
The inner loop starts from the current element i and iterates until the end of the array. Its purpose is to find the minimum element in the unsorted part of the array.

Here's what happens in the inner loop:

- minIndex is initialized to the current element i.
- The loop iterates from i + 1 to the end of the array.
- For each element j in the loop, we check if it's smaller than the current minimum element array[minIndex].
- If we find a smaller element, we update minIndex to the index of that element.

**3. Swapping** 

```js
[array[i], array[minIndex]] = [array[minIndex], array[i]];
```
After the inner loop finishes, we swap the current element array[i] with the minimum element array[minIndex]. This is done using destructuring assignment, which is a concise way to swap two values.

**Example walkthrough**

Let's take the example array [64, 25, 12, 22, 11] and walk through the sorting process:

**1.** `i = 0, minIndex = 0`
- Inner loop: j = 1, array[1] = 25 is smaller than array[0] = 64, so minIndex = 1.
- Swap: array[0] = 25, array[1] = 64
- Array: `[25, 64, 12, 22, 11]`

**2.** `i = 1, minIndex = 1`
- Inner loop: j = 2, array[2] = 12 is smaller than array[1] = 64, so minIndex = 2.
- Swap: array[1] = 12, array[2] = 64
- Array: `[25, 12, 64, 22, 11]`

**3.** `i = 2, minIndex = 2`
- Inner loop: j = 3, array[3] = 22 is smaller than array[2] = 64, so minIndex = 3.
- Swap: array[2] = 22, array[3] = 64
- Array: `[25, 12, 22, 64, 11]`

**4.**`i = 3, minIndex = 3`
- Inner loop: j = 4, array[4] = 11 is smaller than array[3] = 64, so minIndex = 4.
- Swap: array[3] = 11, array[4] = 64
- Array: `[25, 12, 22, 11, 64]`

**5.** `i = 4`, no more iterations needed, as the last element is already in its correct position.

The final sorted array is `[11, 12, 22, 25, 64]`.