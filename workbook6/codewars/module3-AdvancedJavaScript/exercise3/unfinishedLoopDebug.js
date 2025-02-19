//* find the bug in the loop

function createArray(number){
    let newArray = [];
    //* missing increment at end of loop & variable declaration
    for(let counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }