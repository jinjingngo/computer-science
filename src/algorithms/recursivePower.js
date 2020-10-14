const power = (x, n) => {
  // base case
  if (n === 0) return 1;
  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n);
  }
  // recursive case: n is odd
  if (isOdd(n)) {
    return x * power(x, n - 1);
  }
  // recursive case: n is even
  if (isEven(n)) {
    const half = power(x, n / 2);
    return half * half;
  }
};

const isEven = n => n % 2 === 0;

const isOdd = n => !isEven(n);

// power(3, -1);

module.exports = power;