// solution 1
// "use strict";

function init() {
  const greetBtn = document.getElementById("greetBtn");

  greetBtn.onclick = onGreetBtnClicked;
}

function onGreetBtnClicked() {
  const name = document.getElementById("nameField").value;

  alert(`Hello, ${name}!`);
}

window.onload = init;

// solution 2
// "use strict";

// window.onload = function() {

//   document.getElementById("greetBtn").addEventListener("click", function() {

//     alert(`Hello, ${document.getElementById("nameField").value}!`);

//   });
// }

// solution 3
// "use strict";

// function init() {
//   const greetBtn = document.getElementById("greetBtn");

//   greetBtn.addEventListener("click", onGreetBtnClicked);
// }

// function onGreetBtnClicked(event) {
//   const name = document.getElementById("nameField").value;

//   alert(`Hello, ${name}!`);
// }

// window.onload = init;