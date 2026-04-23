const str = "Heena";
function checkRepetedLetter(str) {
  let temp = "";
  for (let i = 0; i < str.length; i++) {
    if(str[i] === temp){
      console.log(`The first repeted letter is "${str[i]}"`);
      break;
    }
    temp = str[i];
  }
}





checkRepetedLetter(str);










































