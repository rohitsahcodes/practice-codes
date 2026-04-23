
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 4, 5];

//function to create new arr of duplicate number 
function findDuplicateNum(arr) {
  let duplicateNum = [];
  for (let i = 0; i < arr.length; i++) {
    // for (let j = i+1; j < arr.length; j++) {   //FOR THIS CODE WE DON'T NEED SLICE TO HALF RESUTL ARR
    for (let j = 0; j < arr.length; j++) {
      if (i === j) null;   //do not check same is same or not
      else if (arr[i] === arr[j]) duplicateNum.push(arr[i]);

    }

  }
  //duplicateNum = [2, 5, 2, 5]
  let result = duplicateNum.slice(0, duplicateNum.length / 2)
  console.log(duplicateNum);
  console.log(result);
}


findDuplicateNum(arr);





































