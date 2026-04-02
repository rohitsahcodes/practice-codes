

// mdn-- - clicked button code

console.log(4);
let age;
age = 334;
if (age >= 14 && age <= 90) console.log("Age is between 14 and 19 inclusive");

if (!(age >= 14 && age <= 90)) console.log("Age is not between 14 to 19 inclusive");

if (age < 14 || age > 90) console.log("Age is not between 14 to 90 inclusive... using if only")


if (-1 || 0) console.log('first'); //first

if (-1 && 0) alert( 'second' ); // no execution

if (null || -1 && 1) console.log('thirt'); // //third



let user = prompt("Who's there?","");
// console.log(user);

if (user === "Admin"){
  let adminPassword = prompt("password", "");
  if(adminPassword === "TheMaster"){
    alert("Welcome!");
  }
  else if(adminPassword === '' || adminPassword === null){
    alert("Cancelled");
  }
  else{
    alert("Wrong password");
  }
  
}
else if (user === '' || user === null){
  alert("Canceled");
}
else{
  alert("I don't know you");
}
