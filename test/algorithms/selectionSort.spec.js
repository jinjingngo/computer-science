const { expect } = require('chai');
const selectionSort = require('../../src/algorithms/selectionSort');

describe('selectionSort', function () {
  it('should be [7, 9, 11, 22, 42, 88, 99]', function () {
    const array = [22, 11, 99, 88, 9, 7, 42];
    selectionSort(array);
    expect(array).to.eql([7, 9, 11, 22, 42, 88, 99]);
  });
  it('should be [5, 8, 10, 19, 75, 87, 90]', function () {
    var array = [19, 8, 5, 75, 90, 87, 10];
    selectionSort(array);
    expect(array).to.eql([5, 8, 10, 19, 75, 87, 90]);
  });
});