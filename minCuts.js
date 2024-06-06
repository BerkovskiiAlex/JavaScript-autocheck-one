/** @format */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите количество гостей ", (input) => {
  const totalCuts = minCuts(input);
  console.log(totalCuts);
  rl.close();
});

function minCuts(N) {
  if (N === 1) return 0;

  let cuts = 0;
  while (N > 1) {
    if (N % 2 === 0) {
      N = N / 2;
    } else {
      N = Math.floor(N / 2) + 1;
    }
    cuts++;
  }
  return cuts;
}
