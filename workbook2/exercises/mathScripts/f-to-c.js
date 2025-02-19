function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
var tempInFahrenheit = 100;

var tempInCelsius = fahrenheitToCelsius(tempInFahrenheit);

console.log("the temperature in fahrenheit converted from celsius is " + tempInCelsius.toFixed(2));