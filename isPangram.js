/** @format */

function isPangram(sentence) {
  sentence = sentence.toLowerCase();

  let alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let char of sentence) {
    if (/[a-z]/.test(char)) {
      alphabetSet.delete(char);
    }
  }

  return alphabetSet.size === 0;
}
