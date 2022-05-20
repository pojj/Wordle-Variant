import words from "./words";

function isValidWord(target, min, max) {
    // base case
    if (max >= min) {
        // find center of search portion
        let center = Math.floor((min + max) / 2);

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