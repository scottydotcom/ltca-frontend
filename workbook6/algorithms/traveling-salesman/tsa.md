```js
// JavaScript program to implement
// traveling salesman problem
// using naive approach.
const V = 4;

// implementation of traveling
// Salesman Problem
const travllingSalesmanProblem = (graph, s) => {
  // store all vertex apart
  // from source vertex
  let vertex = [];
  for (let i = 0; i < V; i++) {
    if (i !== s) {
      vertex.push(i);
    }
  }

  // store minimum weight
  // Hamiltonian Cycle.
  let min_path = Number.MAX_VALUE;
  do {
    // store current Path weight(cost)
    let current_pathweight = 0;

    // compute current path weight
    let k = s;

    for (let i = 0; i < vertex.length; i++) {
      current_pathweight += graph[k][vertex[i]];
      k = vertex[i];
    }
    current_pathweight += graph[k][s];

    // update minimum
    min_path = Math.min(min_path, current_pathweight);
  } while (findNextPermutation(vertex));
  return min_path;
};

// Function to swap the data
// present in the left and right indices
const swap = (data, left, right) => {
  // Swap the data
  let temp = data[left];
  data[left] = data[right];
  data[right] = temp;

  // Return the updated array
  return data;
};

// Function to reverse the sub-array
// starting from left to the right
// both inclusive
const reverse = (data, left, right) => {
  // Reverse the sub-array
  while (left < right) {
    let temp = data[left];
    data[left++] = data[right];
    data[right--] = temp;
  }

  // Return the updated array
  return data;
};

// Function to find the next permutation
// of the given integer array
const findNextPermutation = (data) => {
  // If the given dataset is empty
  // or contains only one element
  // next_permutation is not possible
  if (data.length <= 1) {
    return false;
  }
  let last = data.length - 2;

  // find the longest non-increasing
  // suffix and find the pivot
  while (last >= 0) {
    if (data[last] < data[last + 1]) {
      break;
    }
    last--;
  }

  // If there is no increasing pair
  // there is no higher order permutation
  if (last < 0) {
    return false;
  }
  let nextGreater = data.length - 1;

  // Find the rightmost successor
  // to the pivot
  for (let i = data.length - 1; i > last; i--) {
    if (data[i] > data[last]) {
      nextGreater = i;
      break;
    }
  }

  // Swap the successor and
  // the pivot
  data = swap(data, nextGreater, last);

  // Reverse the suffix
  data = reverse(data, last + 1, data.length - 1);

  // Return true as the
  // next_permutation is done
  return true;
};

// Driver Code
const graph = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];
let s = 0;
console.log(travllingSalesmanProblem(graph, s));
```

# Explanation

**Variables and Constants**

```js
const V = 4;
```

- `V` is a constant that represents the number of vertices (cities) in the graph.
  travllingSalesmanProblem function

**travllingSalesmanProblem function**

```js
const travllingSalesmanProblem = (graph, s) => {
  //...
};
```

- This function takes two arguments: graph and s.
- graph is a 2D array that represents the weighted graph, where graph[i][j] is the weight of the edge between city `i` and city `j`.
- `s` is the source city, where the salesman starts and ends his journey.

**Initialization**

```js
let vertex = [];
for (let i = 0; i < V; i++) {
  if (i !== s) {
    vertex.push(i);
  }
}
```

- `vertex` is an array that stores all vertices (cities) except the source city s.
- The loop iterates over all vertices and adds them to the `vertex` array, except for the source city `s`.

**Minimum Path Weight**

```js
do {
  //...
} while (findNextPermutation(vertex));
```

- The `do-while` loop generates all permutations of the `vertex` array and calculates the path weight for each permutation.
- The loop continues until all permutations have been generated.

**Current Path Weight Calculation**

```js
let current_pathweight = 0;
let k = s;
for (let i = 0; i < vertex.length; i++) {
  current_pathweight += graph[k][vertex[i]];
  k = vertex[i];
}
current_pathweight += graph[k][s];
```

- `current_pathweight` is a variable that stores the path weight for the current permutation.
- The loop iterates over the `vertex` array and calculates the path weight by summing up the weights of the edges between consecutive cities.
- The path weight is calculated by starting from the source city `s`, visiting each city in the permutation, and returning to the source city `s`.

**Minimum Path Weight Update**

```js
min_path = Math.min(min_path, current_pathweight);
```

- The minimum path weight `min_path` is updated if the current path weight `current_pathweight` is smaller.

**findNextPermutation function**

```js
const findNextPermutation = (data) => {
  //...
};
```

- This function generates the next permutation of the `data` array.
- It uses the Steinhaus–Johnson–Trotter algorithm to generate all permutations of the array.

**swap function**

```js
const swap = (data, left, right) => {
  let temp = data[left];
  data[left] = data[right];
  data[right] = temp;
  return data;
};
```

- This function swaps the elements at indices `left` and `right` in the `data` array

**reverse function**

```js
const reverse = (data, left, right) => {
  while (left < right) {
    let temp = data[left];
    data[left++] = data[right];
    data[right--] = temp;
  }
  return data;
};
```

- This function reverses the sub-array of `data` from index `left` to `right` (inclusive).

**findNextPermutation implementation**

```js
if (data.length <= 1) {
  return false;
}
let last = data.length - 2;
while (last >= 0) {
  if (data[last] < data[last + 1]) {
    break;
  }
  last--;
}
if (last < 0) {
  return false;
}
let nextGreater = data.length - 1;
for (let i = data.length - 1; i > last; i--) {
  if (data[i] > data[last]) {
    nextGreater = i;
    break;
  }
}
data = swap(data, nextGreater, last);
data = reverse(data, last + 1, data.length - 1);
return true;
```

- This implementation generates the next permutation of the data array using the Steinhaus–Johnson–Trotter algorithm.
- It finds the longest non-increasing suffix of the array and swaps the pivot element with the rightmost successor.
- It then reverses the suffix to generate the next permutation.