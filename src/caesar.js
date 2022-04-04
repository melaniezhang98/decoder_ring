// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const aCharCode = 97;
  const zCharCode = 122;
  
  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = "";
    //shift = pos # is shift right, neg # is shift left
    if (!shift || shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    //if decode, invert shift
    if (encode === false){
      shift = shift * -1;
    }
    input = input.toLowerCase();
    //loop when letter is shifted and goes off the alphabet
    for (let index=0; index < input.length; index++){
       result += translate(input, index, shift);  
      }
      return result;
    }
  
  
    function translate(input, index, shift){
      let charCode = input.charCodeAt(index);
      //make sure that spaces are maintained throughout, as well as nonalphabetic symbols
      if (charCode > zCharCode || charCode < aCharCode){
        return String.fromCharCode(charCode);
      }
      //add shift to charCode
      let shiftCharCode = charCode + shift;
      //check if character needs translation
      //return input character if doesn't need translation
      if (shiftCharCode > zCharCode){
        shiftCharCode -= 26;
      }
      if (shiftCharCode < aCharCode){
        shiftCharCode += 26;
      }
      //return translated character
      return String.fromCharCode(shiftCharCode);
      }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
