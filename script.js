


//function to camelize given hyphen words 
function camelize(str) {
  let strArr = str.split("-");
  // console.log(strArr);   //[ 'list', 'style', 'image' ]

  //capatilizing every first word after "-" using map method 
  let result = strArr.map((item, index) => {
    if (index === 0) {
      return item;
    } else if (index > 0) {
      return item[0].toUpperCase() + item.slice(1)
    }
  })

  result = result.join("");
  console.log(result);

}

camelize("list-style-image");










