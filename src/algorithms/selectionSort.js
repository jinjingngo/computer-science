const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMinimum = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};

const selectionSort = (array) => {
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    index = indexOfMinimum(array, i);
    swap(array, i, index);
  }
};

module.exports = selectionSort;