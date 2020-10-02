const { expect } = require('chai');
const factorial = require('../../src/algorithms/recursiveFactorial');

describe('recursive factorial', function () {
  it('The value of 5! should be 120', function () {
    const factor = factorial(5);
    expect(factor).equal(120);
  });
  it('The value of 0! should be 1', function () {
    const factor = factorial(0);
    expect(factor).equal(1);
  });
  it('The value of 6! should be 720', function () {
    const factor = factorial(6);
    expect(factor).equal(720);
  });
  it('The value of 7! should be 5040', function () {
    const factor = factorial(7);
    expect(factor).equal(5040);
  });
});