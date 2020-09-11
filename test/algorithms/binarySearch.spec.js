const { expect } = require('chai');
const binarySerch = require('../../src/algorithms/binarySearch');

describe('binarySearch', function () {
  let primes;
  before(function () {
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
      41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  });
  it('no such prime `12`', function () {
    const result = binarySerch(primes, 12);
    expect(result).equal(-1);
  });
  it('found 73 at 20', function () {
    const result = binarySerch(primes, 73);
    expect(result).equal(20);
  });
  it('found 41 at 12', function () {
    const result = binarySerch(primes, 41);
    expect(result).equal(12);
  });
  it('found 2 at 0', function () {
    const result = binarySerch(primes, 2);
    expect(result).equal(0);
  });
});