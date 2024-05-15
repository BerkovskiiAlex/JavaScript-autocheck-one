/** @format */

function blowCandles(str) {
  let blows = 0;
  let i = 0;

  while (i < str.length) {
    if (str[i] !== "0") {
      for (let j = i; j < Math.min(i + 3, str.length); j++) {
        if (str[j] !== "0") {
          str =
            str.substring(0, j) + (parseInt(str[j]) - 1) + str.substring(j + 1);
        }
      }
      blows++;
    } else {
      i++;
    }
  }

  return blows;
}
