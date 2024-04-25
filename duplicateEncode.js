/** @format */

function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = "";
  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i);
    if (word.split(char).length - 1 > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}
