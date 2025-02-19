const payRate = 17.3; 

const hoursWorked = 45;

// Calculate gross pay

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
} else {
  const regularHours = 40;

  const overtimeHours = hoursWorked - regularHours;

  grossPay = payRate * regularHours + payRate * 1.5 * overtimeHours;
}

console.log(`Gross pay: $${grossPay.toFixed(2)}`);


// Instructor Craig solution 
// var hoursWorked = 45;

// var regularPayRate = 17.3;

// var regularHours = 40;

// var overtimePayRate = regularPayRate * 1.5;

// var overtimeHours = hoursWorked - regularHours;

// var regularPay;

// var overtimePay = 0; // initialize overtimePay to 0

// var grossPay;

// if (hoursWorked > regularHours) {
//   regularPay = regularPayRate * regularHours;

//   overtimePay = overtimePayRate * overtimeHours;
// } else {
//   regularPay = regularPayRate * hoursWorked;
// }

// grossPay = regularPay + overtimePay;

// console.log(grossPay);
