const { expect } = require('chai');
const isPalindrome = require('../../src/algorithms/isPalindrome');

describe('Is Palindrome?', function () {
  it('`` is a palindrome.', function () {
    const result = isPalindrome('');
    expect(result).equal(true);
  });
  it('`a` is a palindrome.', function () {
    const result = isPalindrome('a');
    expect(result).equal(true);
  });
  it('`motor` is not a palindrome.', function () {
    const result = isPalindrome('motor');
    expect(result).equal(false);
  });
  it('`rotor` is a palindrome.', function () {
    const result = isPalindrome('rotor');
    expect(result).equal(true);
  });
  it('`arotor` is not a palindrome.', function () {
    const result = isPalindrome('arotor');
    expect(result).equal(false);
  });
  it('`yukekuy` is a palindrome.', function () {
    const result = isPalindrome('yukekuy');
    expect(result).equal(true);
  });
});