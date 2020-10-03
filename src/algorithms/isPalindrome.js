const isPalindrome = str => {
  // base case 1: one or zero letter is palindrome
  if (str.length <= 1) return true;
  // base case 2: first letter not equal to last letter is not a palidrome
  if (firstCharacter(str) !== lastCharacter(str)) return false;
  return isPalindrome(middleCharacters(str));
};

const firstCharacter = str => {
  return str.slice(0, 1);
};

const lastCharacter = str => {
  return str.slice(-1);
};

const middleCharacters = str => {
  return str.slice(1, -1);
};

module.exports = isPalindrome;