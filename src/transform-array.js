const { NotImplementedError } = require('../extensions/index.js');

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

  let resultArr = [];
  let i = 0;
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next':
        if (arr[i + 1]) i += 2;
        if (arr[i + 2] && typeof arr[i + 2] === 'string') i += 3;
        else i++;
        break;
      case '--discard-prev':
        if (resultArr.length !== 0) resultArr.pop();
        i++;
        break;
      case '--double-next':
        if (arr[i + 1]) {
          resultArr.push(arr[i + 1]);
          resultArr.push(arr[i + 1]);
          i += 2;
        } else i++;
        break;
      case '--double-prev':
        if (resultArr.length !== 0)
          resultArr.push(resultArr[resultArr.length - 1]);
        i++;
        break;
      default:
        resultArr.push(arr[i]);
        i++;
        break;
    }
  }
  return resultArr;
}

module.exports = {
  transform
};
