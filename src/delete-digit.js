const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('');
  let max = 0;

  for (let i = 0; i < digits.length; i++) {
    const newNumber = Number(digits.slice(0, i).concat(digits.slice(i + 1)).join(''));
    if (newNumber > max) {
      max = newNumber;
    }
  }

  return max;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
