//* Your task is to create a function that does four basic mathematical operations.
//* The function should take three arguments - operation(string/char), value1(number), value2(number).
//* The function should return result of numbers after applying the chosen operation.

//* solution 1
// function basicOp(operation, value1, value2) {
//     let result = 0;

//     switch (operation.toLowerCase()) {
//         case '+':
//             result = value1 + value2;
//             break;
//         case '-':
//             result = value1 - value2;
//             break;
//         case '*':
//             result = value1 * value2;
//             break;
//         case '/':
//             if (value2!== 0) { // Check to avoid division by zero
//                 result = value1 / value2;
//             } else {
//                 console.error('Cannot divide by zero');
//                 return NaN; // Return NaN if division by zero is attempted
//             }
//             break;
//         default:
//             console.error('Invalid operation');
//             return NaN; // Return NaN for invalid operations
//     }

//     return result;
// }

//* solution 2
function basicOp(operation, value1, value2) {
    let result = 0;

    for (let op of ['+', '-', '*', '/']) {
        if (operation.toLowerCase() === op) {
            if (op === '+') result = value1 + value2;
            else if (op === '-') result = value1 - value2;
            else if (op === '*') result = value1 * value2;
            else if (op === '/') {
                if (value2!== 0) result = value1 / value2;
                else {
                    console.error('Cannot divide by zero');
                    return NaN;
                }
            }
            return result;
        }
    }

    console.error('Invalid operation');
    return NaN;
}