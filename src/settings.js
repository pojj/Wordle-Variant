// The constants for the game
const settings = {
  startingLives: 10,
  startingMoney: 10,
  startingLexiconSize: 6,
  lexiconIncrementSize: 1,
  startingShopSize: 2.2, // Math.ceil is run to ensure everything is 100% predictable
  shopIncrementSize: 0.2,
  maxLexiconSize: 15, // The scrabble board is 15 by 15
  maxShopSize: 5, // Don't go over 12 because freezer takes up 3
  randomMultiplier: 1.5,
  numWords: 279495,
  letterStats: {
    A: { dmg: 2, hp: 3 },
    B: { dmg: 4, hp: 6 },
    C: { dmg: 6, hp: 5 },
    D: { dmg: 6, hp: 6 },
    E: { dmg: 3, hp: 4 },
    F: { dmg: 10, hp: 1 },
    G: { dmg: 1, hp: 10 },
    H: { dmg: 3, hp: 1 },
    I: { dmg: 4, hp: 3 },
    J: { dmg: 10, hp: 9 },
    K: { dmg: 6, hp: 6 },
    L: { dmg: 3, hp: 9 },
    M: { dmg: 8, hp: 2 },
    N: { dmg: 4, hp: 7 },
    O: { dmg: 3, hp: 3 },
    P: { dmg: 8, hp: 6 },
    Q: { dmg: 15, hp: 25 },
    R: { dmg: 6, hp: 8 },
    S: { dmg: 4, hp: 2 },
    T: { dmg: 5, hp: 9 },
    U: { dmg: 6, hp: 6 },
    V: { dmg: 15, hp: 15 },
    W: { dmg: 20, hp: 15 },
    X: { dmg: 20, hp: 20 },
    Y: { dmg: 8, hp: 8 },
    Z: { dmg: 20, hp: 20 },
  },
};

export default settings;
