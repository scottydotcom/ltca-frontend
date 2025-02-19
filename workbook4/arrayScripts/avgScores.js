let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
function getAverage(avgScore) {
  let sum = 0;
  for (let i = 0; i < avgScore.length; i++) {
    sum += avgScore[i];
  }
  return sum / avgScore.length;
}
console.log("My average score: " + getAverage(myScores).toFixed(2));
console.log("Your average score: " + getAverage(yourScores).toFixed(2));