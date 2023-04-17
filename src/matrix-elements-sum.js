const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumArr = [];
  let columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        sumArr.push(matrix[j][i]);
      } else {
        break;
      }
    }
  }
  let result = sumArr.reduce((a, b) => {
    return a + b;
  }, 0);
  return result;
}

module.exports = {
  getMatrixElementsSum,
};