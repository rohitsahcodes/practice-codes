
// let array = [5, 8, 3, 1];


// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     if (!(arr[i] <= b && arr[i] >= a)) {
//       arr.splice(i, 1);
//       i--;
//     } 
//   };
// }

// let filtered = filterRangeInPlace(array, 1, 4);
// console.log(filtered);
// console.log(array)


function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 8, 3, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1]





































