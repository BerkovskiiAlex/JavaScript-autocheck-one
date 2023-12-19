/** @format */

function letterValue(letter) {
  return letter.charCodeAt(0) - "A".charCodeAt(0) + 1;
}

function quicksum(letters) {
  const isValidInput = /^[A-Z ]+$/.test(letters);

  if (!isValidInput) {
    return 0;
  }

  let totalSum = 0;

  for (let i = 0; i < letters.length; i++) {
    const char = letters[i];

    if (char === " ") {
      totalSum += (i + 1) * 0;
    } else {
      const charValue = letterValue(char);
      totalSum += (i + 1) * charValue;
    }
  }

  return totalSum;
}

console.log(quicksum("SGN"));
console.log(quicksum("B H K"));
console.log(quicksum("FDGRd !$4"));
console.log(quicksum("AdfD"));
