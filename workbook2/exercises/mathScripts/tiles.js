var length = 11;
var width = 12;

var area = length * width;

var tilesNeeded = Math.ceil(area / 12);

var tileBoxes = Math.ceil(tilesNeeded / 12);

var tilesOverBuy = 1.1;
var totalTiles = tilesNeeded * tilesOverBuy;

var totalBoxes = Math.ceil(totalTiles / 12);

console.log("area of room: " + area + " sqft");
console.log("tiles needed: " + tilesNeeded);
console.log("Total amount of boxes needed: " + tileBoxes);
console.log("Number of tiles to buy: " + totalTiles.toFixed(1));
console.log("Number of Boxes to buy: " + totalBoxes);