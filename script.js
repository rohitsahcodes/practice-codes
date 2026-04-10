
//fizz buzz game 
function fizzBuzz(value) {
  let m3 = value % 3;
  let m5 = value % 5;

  if (m3 === 0 && m5 === 0) {
    console.log("fizzbuzz");
  }
  else if (m3 === 0) {
    console.log("fizz");
  }
  else if (m5 === 0) {
    console.log("buzz")
  }
  else {
    console.log(value);
  }
}

let takenValue = 50;


for (let i = 1; i <= takenValue; i++){
  fizzBuzz(i);
}

