

// let n = 20;

// if (n < 1) console.log("invalid input please enter greater than 1");
// for (let i = 2; i <= n; i++) {
//   function isPrime(){
    
//   }
//   if (i % 2 === 0 &&
//     i % 3 === 0 &&
//     i % 5 === 0 &&
//     i % 7 === 0 &&
//     i % 11 === 0 &&
//     i % 13 === 0 &&
//     i % 17 === 0 && 
//     i % 19 === 0
//    ){
//      console.log(`Prime number of ${n} = :`, i,", ");
//     } else {
//      continue;
//    }
    
// }

// for n = 10;   output must be 2, 3, 5, 7
  





function sumInput(){
  
  let arr = [];
  while(true){
    let temp = prompt("A number please?","0");
    let newTemp = Number(temp);
    console.log(newTemp);
    if(temp === null) break;
    if(Number.isNaN(newTemp)) break;
    if(temp === '') break;
    arr.push(newTemp);
    console.log(arr);

  }

  let sum = 0;
  while(arr.length){
    let value = arr.pop();
    console.log(value);
    sum += value;
  }
  
  alert("This is the final sum i guess: " + sum);

}
sumInput();























