const { expect } = require('chai');
const insertionSort = require('../../src/algorithms/insertionSort');

describe('insertion sort', function () {
  it('Array after sorting: [7, 9, 11, 22, 42, 88, 99]', function () {
    var array = [22, 11, 99, 88, 9, 7, 42];
    insertionSort(array);
    expect(array).to.eql([7, 9, 11, 22, 42, 88, 99]);
  });
  it('Array after sorting: [0, 7, 9, 11, 22, 42, 88, 99]', function () {
    var array = [22, 11, 99, 0, 88, 9, 7, 42];
    insertionSort(array);
    expect(array).to.eql([0, 7, 9, 11, 22, 42, 88, 99]);
  });
  it('Array after sorting: [-10, 7, 9, 11, 22, 42, 88, 99]', function () {
    var array = [22, 11, 99, -10, 88, 9, 7, 42];
    insertionSort(array);
    expect(array).to.eql([-10, 7, 9, 11, 22, 42, 88, 99]);
  });
});