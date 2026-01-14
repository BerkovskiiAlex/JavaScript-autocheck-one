/** @format */

function add(num1, num2) {
  const a = num1.toString().split("").reverse();
  const b = num2.toString().split("").reverse();
  let result = [];

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    result.push((+(a[i] || 0) + +(b[i] || 0)).toString());
  }

  return Number(result.reverse().join(""));
}
