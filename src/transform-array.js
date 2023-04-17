const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let arrCopy = [...arr];

  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === "--discard-next") {
      if (i + 1 < arrCopy.length) {
        arrCopy.splice(i, 2);
      } else {
        arrCopy.splice(i, 1);
      }
      i--;
    } else if (arrCopy[i] === "--discard-prev") {
      if (i - 1 >= 0 && arrCopy[i - 2] !== "--discard-next") {
        arrCopy.splice(i - 1, 2);
        i -= 2;
      } else {
        arrCopy.splice(i, 1);
        i--;
      }
    } else if (arrCopy[i] === "--double-next") {
      if (i + 1 < arrCopy.length && typeof arrCopy[i + 1] === "number") {
        arrCopy[i] = arrCopy[i + 1];
      } else {
        arrCopy.splice(i, 1);
        i--;
      }
    } else if (arrCopy[i] === "--double-prev") {
      if (i - 1 >= 0 && arrCopy[i - 2] !== "--discard-next") {
        arrCopy[i] = arrCopy[i - 1];
      } else {
        arrCopy.splice(i, 1);
        i--;
      }
    }
  }

  return arrCopy;
}

module.exports = {
  transform,
};
