// function distance(x1, y1, x2, y2) {
//   var dx = x2 - x1;

//   var dy = y2 - y1;

//   return Math.sqrt(dx * dx + dy * dy);
// }

// var distance = distance(10, 20, 30, 40);

// console.log(distance.toFixed(2));

var x1= 10;
var y1= 20;
var x2= 30;
var y2= 40;

var dX = x2 - x1;

var dY = y2 - y1;

var dist = Math.sqrt(dX * dX + dY * dY)

console.log(dist.toFixed(2));
