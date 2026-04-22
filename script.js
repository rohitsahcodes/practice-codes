






























function suffle(arr){
  for (let i = 0; i < arr.length; i++){
    let r = Math.floor(Math.random() * arr.length);
    let temp = arr[i];
    arr[i] = arr[r];
    arr[r]= temp;
  }
}
let arr = [1, 2, 3];
suffle(arr);
console.log(arr);