
//write a function called add7 that takes one number and returns thet number + 7;
function add7 (a){
  return a + 7;
}
console.log(add7(10));


//Wrte a function called multiply that takes 2 numbers and returns their product.
function multiply(a, b){
  return a * b;
}
console.log(multiply(3, 2));


//Write a function called capitalized that takes a string and returns that string with only the first letter capitalized. Make sure it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(a){
  let result;
  result = a.toLowerCase();
  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result;
}
console.log(capitalize("helloHOwAreYou"));


//Write a function callet lastLetter that takes a string and returns the very last letter of that string;

function lastLetter(a){
  let result;
  result = a.slice(-1);
  return result;
}

console.log(lastLetter("ILoveProgramming"));