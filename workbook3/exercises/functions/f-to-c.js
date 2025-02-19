function convertFtoC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
const fahrenheitValues = [212, 90, 72, 32, 0, -40];
fahrenheitValues.forEach((fahrenheit) => {
  const celsius = convertFtoC(fahrenheit);

  console.log(`${fahrenheit}°F is equivalent to ${celsius}°C.`);
});


// Function to convert Fahrenheit to Celsius
// function convertFtoC(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
//   }
// Convert the following Fahrenheit values to Celsius
//   console.log(`212°F is equivalent to ${convertFtoC(212)}°C.`);
//   console.log(`90°F is equivalent to ${convertFtoC(90).toFixed(2)}°C.`);
//   console.log(`72°F is equivalent to ${convertFtoC(72).toFixed(2)}°C.`);
//   console.log(`32°F is equivalent to ${convertFtoC(32)}°C.`);
//   console.log(`0°F is equivalent to ${convertFtoC(0).toFixed(2)}°C.`);
//   console.log(`-40°F is equivalent to ${convertFtoC(-40)}°C.`);