```js
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
```

**1.** The outer loop starts from the second element of the array (index 1) and goes up to the last element.

```js
for (let i = 1; i < array.length; i++)
```

**2.** For each element, we store its value in the key variable and its index in the j variable.

```js
let key = array[i];
let j = i - 1;
```

**3.** The inner while loop compares the key with the elements to its left. If an element is greater than the key, we shift it to the right.

```js
while (j >= 0 && array[j] > key) {
  array[j + 1] = array[j];
  j = j - 1;
}
```

**4.** Once we find the correct position for the key, we insert it there.

```js
   array[j + 1] = key;
  }
  return array;
```

**5.** We repeat this process for all elements in the array.

**use case example**

```let arr = [9, 2, 5, 3, 25, 19, 4];
console.log(`Sorted array: [${insertionSort(arr)}]`); // [2,3,4,5,9,19,25]
```