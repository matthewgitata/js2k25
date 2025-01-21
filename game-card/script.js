const gameEvents = new Map([
  [17, "GOAL"],
  [36, "SUBSTITUTION"],
  [47, "GOAL"],
  [61, "SUBSTITUTION"],
  [64, "YELLOW CARD"],
  [69, "RED CARD"],
  [70, "SUBSTITUTION"],
  [72, "SUBSTITUTION"],
  [76, "GOAL"],
  [80, "GOAL"],
  [92, "YELLOW CARD"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);

gameEvents.delete(64);

const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRS" : "SECOND";
  console.log(`[ ${half} HALF] ${min}: ${event}`);
}
