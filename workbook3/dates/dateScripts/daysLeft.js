window.onload = function init() {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.onclick = daysTo;
}

function daysTo() {
  const dateInput = new Date(document.getElementById("dateInput").value)
  const dateToday = new Date();
  const textInput = document.getElementById("textInput")

  let msec_per_day = 1000 * 60 * 60 * 24;
  let dayDiff = (dateInput.getTime() - dateToday.getTime()) / msec_per_day;

  let numDays = Math.round(dayDiff) +1 ;

  textInput.innerText = "Your trip is in " + numDays + " days."
}
