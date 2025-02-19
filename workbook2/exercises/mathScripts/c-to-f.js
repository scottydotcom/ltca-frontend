function convertCtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}

var tempInCelsius = 30;

var tempInFahrenheit = convertCtoF(tempInCelsius);

console.log(tempInFahrenheit.toFixed(2));
