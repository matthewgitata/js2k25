dogsJulia = [3, 5, 2, 12, 17];
dogsKate = [4, 1, 5, 18, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const realDogsJulia = dogsJulia.slice(1, -2);

  const allDogs = [...realDogsJulia, ...dogsKate];

  allDogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
  const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
    const adults = humanAges.filter((age) => age >= 18);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
  };
  console.log(calcAverageHumanAge(allDogs));
};

checkDogs(dogsJulia, dogsKate);
