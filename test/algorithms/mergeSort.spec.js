const { expect } = require('chai');
const mergeSort = require('../../src/algorithms/mergeSort');

describe('merge sort', function () {
  it('[14, 7, 3, 12, 9, 11, 6, 2] after merge sort should result [2, 3, 6, 7, 9, 11, 12, 14]', function () {
    const array = [14, 7, 3, 12, 9, 11, 6, 2];
    mergeSort(array, 0, array.length - 1);
    expect(array).to.eql([2, 3, 6, 7, 9, 11, 12, 14]);
  });
  it('[14, 7, 3, 12, 9, 0, -1, 11, 6, 2] after merge sort should result [-1, 0, 2, 3, 6, 7, 9, 11, 12, 14]', function () {
    const array = [14, 7, 3, 12, 9, 0, -1, 11, 6, 2];
    mergeSort(array, 0, array.length - 1);
    expect(array).to.eql([-1, 0, 2, 3, 6, 7, 9, 11, 12, 14]);
  });
});