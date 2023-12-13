/** @format */

function goodVsEvil(good, evil) {
  const goodValues = [1, 2, 3, 3, 4, 10];
  const evilValues = [1, 2, 2, 2, 3, 5, 10];

  const calculateWorth = (values, counts) => {
    return values.reduce(
      (sum, value, index) => sum + value * parseInt(counts.split(" ")[index]),
      0
    );
  };

  const goodWorth = calculateWorth(goodValues, good);
  const evilWorth = calculateWorth(evilValues, evil);

  if (goodWorth > evilWorth) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilWorth > goodWorth) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

const goodArmy = "1 2 3 3 4 30";
const evilArmy = "1 2 2 2 3 5 10";
const result = goodVsEvil(goodArmy, evilArmy);
console.log(result);
