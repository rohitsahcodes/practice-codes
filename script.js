
const arr = ['a', 'b', 18, 'd', 100, 10];

function seperateNumStr(arr){
  let numArr = [];
  let charArr = [];
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === "string") charArr.push(arr[i]);
    if(typeof arr[i] === "number") numArr.push(arr[i]);
  }
  console.log(numArr);
  console.log(charArr);
}

seperateNumStr(arr);








































