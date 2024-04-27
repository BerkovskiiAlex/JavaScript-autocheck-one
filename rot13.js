/** @format */

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function (char) {
    const charCode = char.charCodeAt(0);
    const shift = charCode <= 90 ? 65 : 97;
    return String.fromCharCode(((charCode - shift + 13) % 26) + shift);
  });
}
