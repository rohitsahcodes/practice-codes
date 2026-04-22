




//camelizing using "for" loop and "map" method

// //using "for loop"
// function camelize(str) {
//   let container = [];
//   let splitted = str.split("-");
//   console.log(splitted);  // splitted = ['background', 'color']
//   for (let i = 0; i < splitted.length; i++) {
//     console.log(splitted.length, i)
//     if (i === 0) container.push(splitted[i]);
//     else container.push(splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1));
//     console.log("container : ", container);
//   }

//   let result = container.join('');
//   return result;

// }


// using map methods
function camelize(str){
  let container = [];
  let splitted = str.split("-");    // splitted = ['background', 'color']
  let mapp = splitted.map((item, index) => (index === 0) ? item : item.charAt(0).toUpperCase() + item.slice(1));
  mapp = mapp.join('');
  console.log(mapp);
}


console.log(camelize("background-color-hlo"));












































