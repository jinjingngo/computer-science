const { expect } = require('chai');
const power = require('../../src/algorithms/recursivePower');

describe('recursive powers', function () {
  it('power(3, 0) is 1', function () {
    const result = power(3, 0);
    expect(result).equal(1);
  });
  it('power(3, 1) is 3', function () {
    const result = power(3, 1);
    expect(result).equal(3);
  });
  it('power(3, 2) is 9', function () {
    const result = power(3, 2);
    expect(result).equal(9);
  });
  it('power(3, -1) is 1/3', function () {
    const result = power(3, -1);
    expect(result).equal(1/3);
  });
});