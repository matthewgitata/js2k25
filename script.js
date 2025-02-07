const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN $");
    } else {
      reject(new Error("You lost your money ;-)"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// Promisifying setTimeout
const wait = function (s) {
  return new Promise(function (resolve) {
    setTimeout(resolve, s * 1000);
  });
};

wait(2)
  .then(() => {
    console.log("I waited for 2 sec.");
    return wait(1);
  })
  .then(() => console.log("I waited for 1 second."));
