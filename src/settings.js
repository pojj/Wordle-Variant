const settings = {
  startingLives: 10,
  startingMoney: 10,
  startingLexiconSize: 5,
  lexiconIncrementSize: 1,
  startingShopSize: 2.2, // Math.ceil is run to ensure everything is 100% predictable
  shopIncrementSize: 0.2,
  maxLexiconSize: 15, // The scrabble board is 15 by 15
  maxShopSize: 5, // Don't go over 14 because freezer takes up one
  randomMultiplier: 1.5,
  numWords: 279495,
  letterStats: {
    A: { dmg: 6, hp: 6 },
    B: { dmg: 6, hp: 6 },
    C: { dmg: 6, hp: 6 },
    D: { dmg: 6, hp: 6 },
    E: { dmg: 6, hp: 6 },
    F: { dmg: 6, hp: 6 },
    G: { dmg: 6, hp: 6 },
    H: { dmg: 6, hp: 6 },
    I: { dmg: 6, hp: 6 },
    J: { dmg: 6, hp: 6 },
    K: { dmg: 6, hp: 6 },
    L: { dmg: 6, hp: 6 },
    M: { dmg: 6, hp: 6 },
    N: { dmg: 6, hp: 6 },
    O: { dmg: 6, hp: 6 },
    P: { dmg: 6, hp: 6 },
    Q: { dmg: 6, hp: 6 },
    R: { dmg: 6, hp: 6 },
    S: { dmg: 6, hp: 6 },
    T: { dmg: 6, hp: 6 },
    U: { dmg: 6, hp: 6 },
    V: { dmg: 6, hp: 6 },
    W: { dmg: 6, hp: 6 },
    X: { dmg: 6, hp: 6 },
    Y: { dmg: 6, hp: 6 },
    Z: { dmg: 6, hp: 6 },
  },
};

export default settings;
