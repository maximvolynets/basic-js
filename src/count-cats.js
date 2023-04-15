const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCounter = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let n = 0; n < matrix[i].length; n++) {
      if (matrix[i][n] === '^^') {
        catsCounter++;
      }
    }
  }

  return catsCounter;
}

module.exports = {
  countCats
};
