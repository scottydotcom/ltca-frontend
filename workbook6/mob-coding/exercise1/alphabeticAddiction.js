//* Your task is to add up letters to one letter.
//* The function will be given a variable amount of arguments, each one being a letter to add.

function addLetters(...letters) {
    let sum = 0;
    for (let i = 0; i < letters.length; i++) {
      sum += letters[i].charCodeAt(0) - 96;
    }
    let result = sum % 26;
    return result === 0 ? 'z' : String.fromCharCode(result + 96);
  }