

// //javascript

// function favoriteAnimal(animal) {
//   return animal + " is my favorite animal!";
// }
// const message = favoriteAnimal('Goatjhjss');
// console.log(message);


// //min value finder function
// function min(a, b) {
//   return (a > b) ? b : a;
// }
// console.log(min(39, -46));


// //Power function
// function pow(x, y) {
//   let z = x;
//   for (let i = 1; i < y; i++) {
//     z *= x;
//   }
//   return z;
// }
// console.log(pow(2, 4));


// //function value change inside and outside... when called it now assigh new value

// let userName = 'Rohit';
// function showMessage(){
//   userName = 'Nitesh';
//   let print = "Hi, " +userName;
//   console.log(print);
// }
// console.log(userName); //Rohit because function is not called till now

// showMessage();

// console.log(userName);  //Nitesh because function is called and new value assigned


// //now we declare userName 2 times.. so inside function is different thant outside function
// let userName = 'Rohit';
// function showMessage(){
//   let userName = 'Nitesh';
//   let print = "Hi, " +userName;
//   console.log(print);
// }
// console.log(userName);

// showMessage();

// console.log(userName);


// // difference of local copy and original/global
// function showMessage(from, text) {

//   from = '*' + from + '*'; // make "from" look nicer

//   console.log( from + ': ' + text );
// }

// let from = "Ann";

// showMessage(from, "Hello"); // *Ann*: Hello

// // the value of "from" is the same, the function modified a local copy
// console.log( from ); // Ann

// //main if else qns
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

////written in ? : conditional
// function checkAge(age){
//   let permission = (age > 18) ? true : comfirm ('Did parents allow you?');
//   return permission;
// }

// //written in or conditional
// function checkAge(age){
//   let permission = (age > 18) || confirm('Did parents allow you?');
//   return permission;
// }
// console.log(checkAge(47));