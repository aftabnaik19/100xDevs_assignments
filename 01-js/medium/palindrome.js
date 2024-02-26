/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}
function removePunctuation(text) {
  return text.replace(/[^\w\s]|_/g, "");
}
function isPalindrome(str) {
  str = removePunctuation(str);
  str = str.toLowerCase(str);
  str = str.split(" ").join("");

  const reverse = reverseString(str);

  if (str == reverse) return true;
  else return false;
}

module.exports = isPalindrome;
