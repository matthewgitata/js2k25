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
};

checkDogs(dogsJulia, dogsKate);
