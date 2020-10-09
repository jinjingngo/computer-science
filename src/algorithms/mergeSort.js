// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
const merge = (array, p, q, r) => {
  const lowHalf = [];
  const highHalf = [];

  var k = p;
  var i;
  var j;
  for (i = 0; k <= q; i++, k++) {
    lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
    highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i += 1;
    } else {
      array[k] = highHalf[j];
      j += 1;
    }
    k += 1;
  }

  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i += 1;
    k += 1;
  }
  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j += 1;
    k += 1;
  }
};

// Takes in an array and recursively merge sorts it
const mergeSort = (array, p, r) => {
  if (r > p) {
      const q = Math.floor((p + r) / 2);
      mergeSort(array, p, q);
      mergeSort(array, q + 1, r);
      merge(array, p, q, r);
  }
};

module.exports = mergeSort;