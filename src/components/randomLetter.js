/**
 * Picks a random letter in the alphabet
 *
 * @return A string with length 1
 */
function randomLetter() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

export default randomLetter;
