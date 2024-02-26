/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function maximum(a, b) {
  if (a > b) return a;
  else return b;
}

function findLargestElement(numbers) {
  let largest = numbers[0];
  if (numbers.length < 2) return numbers[0];
  else {
    for (let index = 1; index < numbers.length; index++) {
      largest = maximum(largest, numbers[index]);
    }

    return largest;
  }
}
// findLargestElement([10, 5, 3, 15, 5]);
module.exports = findLargestElement;
