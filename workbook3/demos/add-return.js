function add(number1, number2) {
  var result = number1 + number2;
  return result;
}

//a
var resultCaught = add(2, 2);
console.log(resultCaught);
//OR

//b
console.log(add(2, 2));

// common use case
// function loadPosts(){
// stuff
// call api and get data
// return posts;
// }

// function displayPosts(posts) {
// get html elements on the page and fill in data
// }
