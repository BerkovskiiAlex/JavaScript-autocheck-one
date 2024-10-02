/** @format */

function makeLatinSquare(n) {
  const latinSquare = [];

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(((j + i) % n) + 1);
    }
    latinSquare.push(row);
  }

  return latinSquare;
}
