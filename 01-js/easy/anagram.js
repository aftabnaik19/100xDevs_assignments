/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function sortString(stringg) {
  return stringg.split("").sort().join("");
}
function isAnagram(str1, str2) {
  str1 = sortString(str1.toLowerCase());
  str2 = sortString(str2.toLowerCase());

  if (str1 == str2) {
    return true;
  } else return false;
}

// console.log(isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;
