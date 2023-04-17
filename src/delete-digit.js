const { NotImplementedError } = require("../extensions/index.js");

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
function deleteDigit(number) {
  let numberArr = number.toString().split("");
  let max = numberArr.slice(1).join("");
  for (let i = 1; i < numberArr.length; i++) {
    const removed = Number(
      numberArr
        .slice(0, i)
        .concat(numberArr.slice(i + 1))
        .join("")
    );
    if (removed > max) max = removed;
  }

  return parseInt(max);
}

module.exports = {
  deleteDigit,
};
