/** @format */

function solve(a, b) {
  let count = 0;

  function generateNumbers(prefix) {
    if (parseInt(prefix) >= b) {
      return;
    }

    if (parseInt(prefix) >= a && isEviternity(prefix)) {
      count++;
    }

    generateNumbers(prefix + "8");
    generateNumbers(prefix + "5");
    generateNumbers(prefix + "3");
  }

  function isEviternity(num) {
    const numStr = num.toString();
    let count8 = 0,
      count5 = 0,
      count3 = 0;

    for (let i = 0; i < numStr.length; i++) {
      if (numStr[i] === "8") {
        count8++;
      } else if (numStr[i] === "5") {
        count5++;
      } else if (numStr[i] === "3") {
        count3++;
      }
    }

    return count8 >= count5 && count5 >= count3;
  }

  generateNumbers("");

  return count;
}
