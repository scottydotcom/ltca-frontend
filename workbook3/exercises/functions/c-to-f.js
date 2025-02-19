// c to f.js
function convertCtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}
let temperatures = [100, 45, 19, 0, -7, -40];
for (let temp of temperatures) {
  let fahrenheitTemp = convertCtoF(temp);

  console.log(`${temp}°C is ${fahrenheitTemp}°F`);
}


// function convertCtoF(celsius) {
//   return (celsius * 9) / 5 + 32;
// }
// console.log(`100°C is equivalent to ${convertCtoF(100)}°F.`);
// console.log(`45°C is equivalent to ${convertCtoF(45).toFixed(2)}°F.`);
// console.log(`19°C is equivalent to ${convertCtoF(19).toFixed(2)}°F.`);
// console.log(`0°C is equivalent to ${convertCtoF(0)}°F.`);
// console.log(`-7°C is equivalent to ${convertCtoF(-7).toFixed(2)}°F.`);
// console.log(`-40°C is equivalent to ${convertCtoF(-40)}°F.`);
