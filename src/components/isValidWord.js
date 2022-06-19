import words from "../data/words";

/**
 * Function that uses a binary search to look through a list of words
 * to determine if target is a valide english word
 *
 * @return boolean If letter combination is a word or not
 */
function isValidWord(target, min, max) {
  // base case
  if (max >= min) {
    // find center of search portion
    const center = Math.floor((min + max) / 2);

    // check if center is target
    if (words[center] === target) {
      return true;
    }

    // target is before center
    else if (words[center] > target) {
      return isValidWord(target, min, center - 1);
    }

    // target is after center
    else if (words[center] < target) {
      return isValidWord(target, center + 1, max);
    }
  }
  return false;
}

export default isValidWord;
