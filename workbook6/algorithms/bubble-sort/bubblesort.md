```js
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
```

**1: Initialize variables**

```js
let n = arr.length;
```

The algorithm initializes a variable n to the length of the input array arr.

**2: Outer Loop**

```js
for (let i = 0; i < n - 1; i++)
```

The outer loop iterates n-1 times, where n is the current length of the array.
In each iteration, the loop will iterate n-i-1 times, where i is the current iteration number.

**3: Inner loop**

```js
for (let j = 0; j < n - i - 1; j++)
```

The inner loop compares adjacent elements arr[j] and `arr[j + 1]`.
If arr[j] is greater than `arr[j + 1]`, the elements are swapped using a temporary variable temp.
The swapped variable is set to true to indicate that a swap was made.

**4: Check for swaps**

```js
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

```

After each inner loop iteration, the algorithm checks if any swaps were made (i.e., swapped is true).
If no swaps were made, the algorithm can exit the outer loop early, since the array is already sorted.

**Example Usage**

Let's say we have an array 'arr' with the following elements:

```js
let arr = [5, 2, 8, 3, 1, 6, 4];
```

The first iteration of the outer loop will compare the following pairs of adjacent elements:

```js
[5, 2]
[8, 3]
[1, 6]
[4];
```

Since 5 is greater than 2, the algorithm will swap these elements:

```js
[2, 5]
[8, 3]
[1, 6]
[4];
```