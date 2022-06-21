import words from "../data/words";

/**
 * Function that uses a binary search to look through a list of words
 * to determine if target is a valid english word
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

/**
 * Trie data structure for even faster word validation
 * Not used
 */
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Insert a word into the Trie
   * @param {string} word
   */
  insert(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  /**
   * Check if a word is valid in the Trie
   * @param {string} word
   * @return {boolean} If word is a valid word in the Trie
   */
  isValidWord(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord; // Return true only if it's the end of a valid word
  }
}

// const trie = new Trie();

// // Insert words into the Trie
// for (let word of words) {
//   trie.insert(word);
// }
