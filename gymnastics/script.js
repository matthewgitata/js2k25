///Prompt for Dolphin Scores
const dolphinsScore1 = Number(prompt("Enter Dolphins Score 1"));
const dolphinsScore2 = Number(prompt("Enter Dolphins Score 2"));
const dolphinsScore3 = Number(prompt("Enter Dolphins Score 3"));

const dolphinsAverageScore = calculateAverageScore(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3
);

console.log(`Dolphins average score is: ${dolphinsAverageScore}.`);

//Prompt for Koalas Scores
const koalasScore1 = Number(prompt("Input Koalas Score 1"));
const koalasScore2 = Number(prompt("Input Koalas Score 2"));
const koalasScore3 = Number(prompt("Input Koalas Score 3"));

const koalasAverageScore = calculateAverageScore(
  koalasScore1,
  koalasScore2,
  koalasScore3
);

console.log(`Koala's average score is: ${koalasAverageScore}.`);

checkWinner(dolphinsAverageScore, koalasAverageScore);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log("No winner.");
  }
}

function calculateAverageScore(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
