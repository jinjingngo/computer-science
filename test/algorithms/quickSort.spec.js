const { expect } = require('chai');
const quickSort = require('../../src/algorithms/quickSort');

describe('quick sort', function () {
  it('[9,7,5,11,12,2,14,3,10,4,6] should be [2,3,4,5,6,7,9,10,11,12,14]', function () {
    const array = [9,7,5,11,12,2,14,3,10,4,6];
    quickSort(array, 0, array.length - 1);
    expect(array).to.eql([2,3,4,5,6,7,9,10,11,12,14]);
  });
  it('[9,7,5,11,-1,12,2,14,3,10,4,6,0] should be [-1,0,2,3,4,5,6,7,9,10,11,12,14]', function () {
    const array = [9,7,5,11,-1,12,2,14,3,10,4,6,0];
    quickSort(array, 0, array.length - 1);
    expect(array).to.eql([-1,0,2,3,4,5,6,7,9,10,11,12,14]);
  });
})