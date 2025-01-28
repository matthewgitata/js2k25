const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  {
    weight: 13,
    curFood: 275,
    owners: ["Sarah", "John"],
  },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

const recommendedFood = function (dogs) {
  dogs.forEach(function (dog) {
    dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
};
recommendedFood(dogs);

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);
