/** @format */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  const maxDistance = mpg * fuelLeft;
  return maxDistance >= distanceToPump;
};
