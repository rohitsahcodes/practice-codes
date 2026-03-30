

// mdn-- - clicked button code


function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You just clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}


console.log("Hey, baby!");

// //messing with object..
// let user= {name: "Rohit", age: 23
// };

// console.log(user);

// user.sex = "male";
// user["still virgin"] = true;

// let key = "still learning";
// user[key] = true;

// let fruit = prompt("Which fruits you want to buy?", "apple");

// let bag = {
//   [fruit]: 5,
// };
// console.log( bag.apple);

// function makeUser(name, age){
//   return{
//     name: name,
//     age: age,
//   };
// }

// let user1 = makeUser("Rohit", 23);
// console.log(user1.name);
// console.log(user1.age);

// let user2 = makeUser("Nitesh", 22);
// console.log(user2.name);
// console.log(user2.age);

// let user3 = makeUser("Sabina", 20);
// console.log(user3.name);
// console.log(user3.age);

// // there is no reserved word restriction while naming.. 0 also can be used it auto-- changed into string..
// let obj ={
//   if: 1,
//   or: 2,
//   else: 3,
//   return: 4,
//   for: 5,
//   0: 6,
// }
// console.log(obj.if + obj.or +obj.else + obj.return + obj.for + obj[0]);


let user = {};
user.name = 'John';
user.surname = "Smit";

user.name = "Peter";
delete user.name;

console.log(user);


