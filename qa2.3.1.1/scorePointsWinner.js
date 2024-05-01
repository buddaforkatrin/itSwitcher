const players = [
  // Negative Score
  {
    id: 1,
    name: "John",
    scorePoints: -100,
  },
  {
    id: 2,
    name: "Alice",
    scorePoints: -50,
  },
  // Zero Score
  {
    id: 3,
    name: "Mike",
    scorePoints: 0,
  },
  // Low Score
  {
    id: 4,
    name: "Ivan",
    scorePoints: 2999,
  },
  {
    id: 5,
    name: "Petr",
    scorePoints: 3000,
  },
  // Medium Score
  {
    id: 6,
    name: "Vadim",
    scorePoints: 3001,
  },
  {
    id: 7,
    name: "Olga",
    scorePoints: 3500,
  },
  {
    id: 8,
    name: "Anna",
    scorePoints: 3999,
  },
  // High Score
  {
    id: 9,
    name: "Maria",
    scorePoints: 4001,
  },
  {
    id: 10,
    name: "Sergey",
    scorePoints: 4500,
  },
];

let scorePointsArray = [];

for (elementKey in players) {
  scorePointsArray.push(players[elementKey].scorePoints);
}
console.log(scorePointsArray);

let MaxOfScorePoints = Math.max(...scorePointsArray);
console.log(MaxOfScorePoints);
