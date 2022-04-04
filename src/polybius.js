// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
const encoder = { 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i/j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
const decoder = { '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };
  
  function polybius(input, encode = true) {
    // your solution code here
    //only lowercase letters
    input = input.toLowerCase();
    //store result
    let result = "";
    //split string into an array and note space count
    let spaceCount = input.split(' ').length - 1;
    //is valid if numbers are even
    let isValid = (input.length - spaceCount)%2 === 0;
    //if encode, loop through input with encoder
    if (encode){
      for (let index=0; index<input.length; index++){
        result += encodeTranslate(input, index, encoder);
      }
      return result;
    // else, loop through input with decoder
    } else if (isValid) {
      let numberChunkArray = input.split(" ");
      for (let index=0; index<numberChunkArray.length; index++){
          let numberChunk = numberChunkArray[index];
        for (let i=0; i<numberChunk.length; i+=2){
          //take first 2 digits of numberChunk
          let slicer = numberChunk.slice(i, i+2);
          result += decodeTranslate(slicer, decoder);
        }
        //if spaceCount > 0, will go thru for loop again, adding a space to the result and decrement spaceCount by 1
        if (spaceCount > 0){
          result += " ";
          spaceCount--;
        }
      }
      return result;
      } else {
        return false;
      }
    //helper function
    function encodeTranslate(input, index, encoder){
      let letter = input[index];
      let result = encoder[letter];
      if (letter === "i" || letter === "j"){
        return 42;
      }
      if (letter === ' '){
        return ' ';
      }
      return result;
    }
    //helper function
    function decodeTranslate(numberChunk, decoder){
      let result = decoder[numberChunk];
      return result;
    }
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
