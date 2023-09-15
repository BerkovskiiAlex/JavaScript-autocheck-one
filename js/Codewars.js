/** @format */

function digitalRoot(n) {
  while (n > 9) {
    let sum = 0;
    let nString = n.toString();

    for (let i = 0; i < nString.length; i += 1) {
      sum += parseInt(nString[i]);
    }
    n = sum;
  }
  return n;
}

console.log(digitalRoot(123123));
