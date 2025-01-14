const heightMark = 1.88;
const massMark = 95;

const heightJohn = 1.76;
const massJohn = 85;

const BMIMark = calculateBmi(massMark, heightMark);

const BMIJohn = calculateBmi(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn ? true : false;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

function calculateBmi(mass, height) {
  return mass / (height * height);
}
