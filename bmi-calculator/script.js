const heightMark = 1.88;
const massMark = 95;

const heightJohn = 1.76;
const massJohn = 85;

const BMIMark = calculateBmi(massMark, heightMark);

const BMIJohn = calculateBmi(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn ? true : false;

console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);

if (markHigherBMI) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's ${BMIMark}!`);
}

function calculateBmi(mass, height) {
  return mass / (height * height);
}
