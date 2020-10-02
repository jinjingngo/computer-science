const insert = (array, rightIndex, value) => {
  let i;
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
};

const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
};

module.exports = insertionSort;