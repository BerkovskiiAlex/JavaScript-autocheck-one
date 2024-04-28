/** @format */

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    if (alphabet.includes(char)) {
      result += alphabet.indexOf(char) + 1 + " ";
    }
  }

  result = result.trim();
  return result;
}
