let firstNames = ["Nedret", "scott", "aung", "natalie"];
// console.log(firstNames[1]); //scott

for (let index = 0; index < firstNames.length; index++) {
    console.log(firstNames[index]);
}

for (let firstName of firstNames) {
    console.log(firstName);
}