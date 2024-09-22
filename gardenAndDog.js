/** @format */

function crap(x, bags, cap) {
  for (let row of x) {
    if (row.includes("D")) {
      return "Dog!!";
    }
  }

  let totalCrap = x.reduce((count, row) => {
    return count + row.filter((cell) => cell === "@").length;
  }, 0);

  if (bags === 0) {
    return totalCrap > 0 ? "Cr@p" : "Clean";
  }

  let totalCapacity = bags * cap;

  return totalCapacity >= totalCrap ? "Clean" : "Cr@p";
}
