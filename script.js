
//basic "reduce" method and "for" loop


//calculating multiplication of all arr values
let arr = [1, 2, 3, 4, 5, 6];

//using for loop
let total = 1;
for (let i = 0; i < arr.length; i++) {
  total = total * arr[i];
}
console.log(total);


//using fuction and reduce
function reducee(acc, curr){
  return acc *= curr;
}

let result = arr.reduce(reducee);
console.log(result);


//using arrow function
let ans = arr.reduce((acc, curr) => {
  return acc *= curr;

},2);    //2 accumulator value does (2 * ${ans})
// let ans = arr.reduce((acc, curr) => acc *= curr);

console.log (ans);






















































