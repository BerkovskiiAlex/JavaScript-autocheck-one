/** @format */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Введите значения A, B, C, D: ", (input) => {
  const [A, B, C, D] = input.split(" ").map(Number);
  const totalCost = calculateInternetCost(A, B, C, D);
  console.log(totalCost);
  rl.close();
});

function calculateInternetCost(A, B, C, D) {
  let totalCost = A;
  if (D > B) {
    const extraTraffic = D - B;
    totalCost += extraTraffic * C;
  }
  return totalCost;
}
