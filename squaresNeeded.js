/** @format */

function squaresNeeded(grains) {
  if (grains === 0) return 0;

  let totalGrains = 0;
  let squareCount = 0;

  while (totalGrains < grains) {
    squareCount++;
    totalGrains += Math.pow(2, squareCount - 1);
  }

  return squareCount;
}
