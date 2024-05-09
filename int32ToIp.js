/** @format */

function int32ToIp(num) {
  let binary = num.toString(2).padStart(32, "0");

  let octets = [];
  for (let i = 0; i < 32; i += 8) {
    octets.push(binary.substr(i, 8));
  }

  let decimalOctets = octets.map((octet) => parseInt(octet, 2));

  return decimalOctets.join(".");
}
