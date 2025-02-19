//* Given a string s, write a method (function) that will return true if its a valid single integer 
//* or floating number or false if its not.

//* solution 1
// function isDigit(s) {
//     Regular expression pattern for a valid single integer or floating-point number
//     const regex = /^(\d+(\.\d*)?|\-\d+(\.\d*)?)$/;
    
//     return regex.test(s);
// }

//* solution 2
function isDigit(s) {
    return !isNaN(parseFloat(s)) && isFinite(s);
}
