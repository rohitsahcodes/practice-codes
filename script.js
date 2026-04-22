
//basic filter and for



let arr = [1, 2, 3, 4, 5, 6];

//using for loop
let container = [];
for (let i = 0; i < arr.length; i++){
  if (arr[i]%2 === 0) container.push(arr[i]); //it stores items when if condition is true
}
console.log(container);



//filter method method used
let mappedArr = arr.filter(item => item %2 === 0)
console.log(mappedArr);






















































