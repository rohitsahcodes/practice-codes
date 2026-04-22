
let string = "RohitO";
let vowels = "aeiouAEIOU";


let result = [];
function checkVowels(str, vowels){
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str.charAt(i) === vowels.charAt(j)) {
        result.push(str.charAt(i));
      }
      
    } 
  }
  return result;
}


console.log(checkVowels(string, vowels))























