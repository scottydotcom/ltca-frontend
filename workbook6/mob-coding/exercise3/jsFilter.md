```js
function roomMates(rooms, floor) {
  let floorStart = (floor - 1) * 6;
  let floorEnd = floorStart + 6;
  let floorRooms = rooms.slice(floorStart, floorEnd);
  return floorRooms.filter((name) => name != "");
}
```

- `roomMates` function takes two arguments: an array of room names (`rooms`), and a floor number (`floor`). It calculates the starting and ending indices of the floor by multiplying the floor number by 6 and adding or subtracting 6 from the result, then uses the `slice` method to extract the rooms on that floor from the `rooms` array
- `filter` method to create a new array that contains only the non-empty strings from the `floorRooms array`. This means that any empty strings in the `floorRooms` array will be removed, and only the names of the occupants will be included in the new array.
- the `roomMates` function returns the new array, which contains the names of the occupants on the specified floor

```js
function roomMates(rooms, floor) {
  const floorStartIndex = (floor - 1) * 6;
  const floorEndIndex = floorStartIndex + 6;
  const floorRooms = rooms.slice(floorStartIndex, floorEndIndex);
  let names = [];
  switch (floor) {
    case 1:
      names = floorRooms.filter((name) => name !== "");
      break;
    case 2:
      names = floorRooms.filter((name) => name !== "");
      break;
    case 3:
      names = floorRooms.filter((name) => name !== "");
      break;
    case 4:
      names = floorRooms.filter((name) => name !== "");
      break;
    case 5:
      names = floorRooms.filter((name) => name !== "");
      break;
    case 6:
      names = floorRooms.filter((name) => name !== "");
      break;
    default:
      names = [];
  }
  return names;
}
```

This is a JavaScript function named `roomMates` that takes two arguments:

- `rooms`: an array of strings representing the names of roommates
- `floor`: an integer representing the floor number (1-6)

The function returns an array of strings representing the names of roommates on the specified floor.

**step-by-step breakdown of the function:**

**1.** It calculates the starting and ending indices for the slice of the rooms array that corresponds to the specified floor. Since each floor has 6 rooms, the starting index is `(floor - 1) * 6`, and the ending index is `floorStartIndex + 6.`

**2.** It extracts the slice of the `rooms` array corresponding to the specified floor using the `slice()` method.

**3.** It initializes an empty array `names` that will store the names of roommates on the specified floor.

**4.** It uses a `switch` statement to handle each floor number (1-6) separately. For each floor, it filters the `floorRooms` array to remove any empty strings (""), and assigns the resulting array to `names`.

**5.** If the `floor` argument is not one of the numbers 1-6, the `default` branch is executed, and an empty array `names` is returned.

**6.** Finally, the function returns the `names` array.