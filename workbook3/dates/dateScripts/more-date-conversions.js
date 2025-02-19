let birthday = new Date(1900/1/22);
console.log(`${birthday.toLocaleString()}`)

let momBirthday = new Date(0, 22, 1900);
console.log(`${momBirthday.toLocaleString()}`);

let dadBirthday = new Date(1900, 3, 24);
console.log(`${momBirthday.toLocaleString()}`);

// When date and time are specified, results are obvious
let d1 = new Date("May 20, 1990 03:20:00");
console.log(`${d1.toLocaleString()}`);
// May 20, 1990
// When only a date is specified, time defaults to midnight

let d2 = new Date("08/05/1986");
console.log(`${d2.toLocaleString()}`);
// August 5, 1986

let d3 = new Date("Sep 05 1958");
console.log(`${d3.toLocaleString()}`);
// September 5, 1958

let d4 = new Date("12 December 1982");
console.log(`${d4.toLocaleString()}`);
// December 12, 1992