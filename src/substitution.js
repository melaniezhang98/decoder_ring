// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6


const substitutionModule = (function () {
  //create function translate and pass in input array, real alphabet array, and provided alphabet array
  function translate(input, sourcedAlphabet, destinationAlphabet){
    let result = "";
       //loop thorugh the input array
    for (const inChar of input){
      let index = -1;
      for (let i=0; i<sourcedAlphabet.length; i++){
          //for each input character, find the position within alphabet
        if (inChar === sourcedAlphabet[i]){
            //add to new string the character from the translated alphabet at the same position
            index = i;
            break;
          } 
      }
      if (index === -1){
          result += inChar;
      } else{
          result += destinationAlphabet[index];
      }
      }
      return result;
  }

  function substitution(input, alphabet, encode = true) {
      if (!alphabet){
        return false;
      }
      //if alphabet.length != 26 return false. 
      if (alphabet.length != 26){
        return false;
      }
      // your solution code here
      let realAlphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
      let providedAlphabetArray = alphabet.split("");
      let inputArray = input.split("");
      let result ="";
      //make sure characters in alphabet are unique
      for (const char of providedAlphabetArray){
        const chars = providedAlphabetArray.filter((aChar) => aChar === char);
        if(chars.length > 1){
          return false;
        }
      } 
     //encode: loop thru length of input
     if (encode){
       return translate(input.split(""), realAlphabetArray, providedAlphabetArray)
     } else{
       return translate(input.split(""), providedAlphabetArray, realAlphabetArray)
     }
  }  
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
