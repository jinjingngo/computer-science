const binarySearch = (array, target) => {
  let min = 0;
  let max = array.length - 1;
  let guess;
  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    if (array[guess] === target) {
      return guess;
    } else if (array[guess] < target) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;