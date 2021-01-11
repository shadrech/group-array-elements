/**
 * Function divides given array into n equally sized arrays
 * In the case where the original array cannot be divided equally by N, the final array will have
 * a length equal to the remainder
 *
 * e.g. groupArrayElements([ 1 , 2 , 3 , 4 , 5 ], 3 ); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
 * @param {*[]} array Array of elements to divide
 * @param {Number} n The amount arrays to divide to
 * @return {*[][]} Array of n arrays
 */
function groupArrayElements(array, n) {
  if (!array.length) throw new Error('array must not be empty');
  if (n < 1) throw new Error('n must be a positive integer');
  
  const groupedArray = [];
  const division = array.length / n;
  // we calculate whether the highest rounding of the division will give us n arrays, otherwise we use rounded down value
  const groupLength = Math.ceil(array.length / Math.ceil(division)) === n ? Math.ceil(division) : Math.floor(division);

  while (true) {
    if (!array.length) break;
    if (groupedArray.length === n - 1) {
      groupedArray.push(array);
      break;
    }

    groupedArray.push(array.splice(0, groupLength));
  }
  return groupedArray;
}

module.exports = groupArrayElements;
