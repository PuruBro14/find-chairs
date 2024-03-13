// using for loop
function chairsNeeded(arr, chairsNeeded) {
  let count = 0;
  const resultedArr = [];

  if (chairsNeeded === 0) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i][1] - arr[i][0].length;
    if (count < chairsNeeded) {
      count += diff;
      resultedArr.push(diff);
    }
  }
  if (count < chairsNeeded) {
    return 0;
  }
  return resultedArr;
}

console.log(
  chairsNeeded(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
      ["XXX", 2],
    ],
    4
  )
);

//using for of loop

function chairsNeeded(arr, chairsNeeded) {
  let totalChairsNeeded = chairsNeeded;
  let totalChairsAvailable = 0;
  const resultedArr = [];

  if (chairsNeeded === 0) {
    return 1;
  }

  for (let i = 0; i < arr.length; i++) {
    const occupiedSeats = arr[i][0].length;
    const totalSeats = arr[i][1];
    const emptySeats = Math.max(0, totalSeats - occupiedSeats);
    totalChairsAvailable += emptySeats;
    resultedArr.push(emptySeats);

    if (totalChairsAvailable >= chairsNeeded) {
      return resultedArr;
    }
  }

  return 0;
}

console.log(
  chairsNeeded(
    [
      ["XXX", 3],
      ["XXXXX", 6],
      ["XXXXXX", 9],
      ["XXX", 2],
    ],
    2
  )
);
