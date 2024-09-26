/** @format */

function maxBisectors(n) {
  if (n < 2) return 0;
  return n % 2 === 0 ? (n * n) / 4 : (n * n - 1) / 4;
}
