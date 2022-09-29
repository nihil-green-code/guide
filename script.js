const arr = new Array(5);

for (let row = 0; row < arr.length; row++) {
  arr[row] = new Array(5);
}

for (let col = 5, print = 1; col >= 0; col--) {
  for (let row = 5; row >= 0; row--) {
    arr[row][col] = print++;
  }
}

console.log(arr);