/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isVowel(letter) {
  let arr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == letter) return true;
  }
  return false;
}
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  // console.log(count);
  return count;
  // Your code here
}
module.exports = countVowels;
