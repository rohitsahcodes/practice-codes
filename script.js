



// make even number triple and sum them;

let arr = [1, 2, 3, 4, 5, 6];
function sumOfTripledEvens() {
  let result =  arr.reduce((acc, curr) => {
    if (curr % 2 === 0) curr *= 3;
    acc += curr;
    return acc;
  }, 0);
  console.log(`The sum or vlues of array when even value is triples is : ${result}`);

}

console.log(arr);
sumOfTripledEvens();

















































