const { expect } = require('chai');
const binarySerch = require('../../src/algorithms/binarySearch');

describe('binarySearch', function () {
  it('found nothing', function () {
    const array = [];
    const target = 1;
    expect(binarySerch(array, target)).equal(-1);
  });
});