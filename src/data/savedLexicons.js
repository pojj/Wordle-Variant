// Array with past battles
const saved = [
  [
    [
      {
        value: "B",
        dmg: 19,
        hp: 21,
      },
      {
        value: "E",
        dmg: 23,
        hp: 18,
      },
      {
        value: "N",
        dmg: 17,
        hp: 23,
      },
    ],
    [
      {
        value: "O",
        dmg: 18,
        hp: 17,
      },
      {
        value: "H",
        dmg: 21,
        hp: 19,
      },
      {
        value: "O",
        dmg: 17,
        hp: 17,
      },
    ],
    [
      {
        value: "L",
        dmg: 5,
        hp: 9,
      },
      {
        value: "I",
        dmg: 9,
        hp: 5,
      },
      {
        value: "X",
        dmg: 29,
        hp: 30,
      },
    ],
    [
      {
        value: "A",
        dmg: 6,
        hp: 9,
      },
      {
        value: "R",
        dmg: 8,
        hp: 14,
      },
      {
        value: "U",
        dmg: 6,
        hp: 7,
      },
    ],
    [
      {
        value: "H",
        dmg: 6,
        hp: 5,
      },
      {
        value: "E",
        dmg: 6,
        hp: 9,
      },
      {
        value: "C",
        dmg: 9,
        hp: 7,
      },
    ],
    [
      {
        value: "Q",
        dmg: 9,
        hp: 2,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "S",
        dmg: 4,
        hp: 2,
      },
    ],
    [
      {
        value: "D",
        dmg: 9,
        hp: 6,
      },
      {
        value: "W",
        dmg: 12,
        hp: 23,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 10,
      },
    ],
    [
      {
        value: "U",
        dmg: 13,
        hp: 5,
      },
      {
        value: "P",
        dmg: 9,
        hp: 10,
      },
      {
        value: "Q",
        dmg: 3,
        hp: 10,
      },
    ],
    [
      {
        value: "R",
        dmg: 11,
        hp: 18,
      },
      {
        value: "A",
        dmg: 10,
        hp: 11,
      },
      {
        value: "P",
        dmg: 19,
        hp: 15,
      },
    ],
    [
      {
        value: "P",
        dmg: 5,
        hp: 7,
      },
      {
        value: "E",
        dmg: 11,
        hp: 12,
      },
      {
        value: "F",
        dmg: 18,
        hp: 5,
      },
    ],
    [
      {
        value: "Z",
        dmg: 9,
        hp: 1,
      },
      {
        value: "R",
        dmg: 1,
        hp: 9,
      },
      {
        value: "L",
        dmg: 5,
        hp: 7,
      },
    ],
    [
      {
        value: "M",
        dmg: 18,
        hp: 16,
      },
      {
        value: "I",
        dmg: 23,
        hp: 18,
      },
      {
        value: "D",
        dmg: 19,
        hp: 16,
      },
    ],
    [
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "Z",
        dmg: 5,
        hp: 29,
      },
      {
        value: "N",
        dmg: 3,
        hp: 9,
      },
    ],
    [
      {
        value: "Q",
        dmg: 9,
        hp: 23,
      },
      {
        value: "I",
        dmg: 6,
        hp: 6,
      },
      {
        value: "X",
        dmg: 12,
        hp: 10,
      },
    ],
    [
      {
        value: "F",
        dmg: 10,
        hp: 5,
      },
      {
        value: "Y",
        dmg: 11,
        hp: 8,
      },
      {
        value: "T",
        dmg: 1,
        hp: 12,
      },
    ],
    [
      {
        value: "J",
        dmg: 8,
        hp: 13,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "G",
        dmg: 1,
        hp: 15,
      },
    ],
    [
      {
        value: "M",
        dmg: 21,
        hp: 16,
      },
      {
        value: "E",
        dmg: 20,
        hp: 21,
      },
      {
        value: "D",
        dmg: 22,
        hp: 21,
      },
    ],
    [
      {
        value: "M",
        dmg: 12,
        hp: 6,
      },
      {
        value: "U",
        dmg: 7,
        hp: 6,
      },
      {
        value: "E",
        dmg: 4,
        hp: 6,
      },
    ],
    [
      {
        value: "C",
        dmg: 14,
        hp: 20,
      },
      {
        value: "H",
        dmg: 19,
        hp: 19,
      },
      {
        value: "A",
        dmg: 14,
        hp: 15,
      },
    ],
    [
      {
        value: "P",
        dmg: 5,
        hp: 4,
      },
      {
        value: "W",
        dmg: 13,
        hp: 8,
      },
      {
        value: "R",
        dmg: 9,
        hp: 7,
      },
    ],
    [
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
      {
        value: "R",
        dmg: 5,
        hp: 4,
      },
      {
        value: "K",
        dmg: 3,
        hp: 4,
      },
    ],
  ],
  [
    [
      {
        value: "P",
        dmg: 12,
        hp: 9,
      },
      {
        value: "O",
        dmg: 13,
        hp: 12,
      },
      {
        value: "R",
        dmg: 16,
        hp: 20,
      },
      {
        value: "O",
        dmg: 17,
        hp: 17,
      },
      {
        value: "W",
        dmg: 31,
        hp: 29,
      },
      {
        value: "H",
        dmg: 4,
        hp: 2,
      },
    ],
    [
      {
        value: "L",
        dmg: 21,
        hp: 25,
      },
      {
        value: "I",
        dmg: 50,
        hp: 46,
      },
      {
        value: "C",
        dmg: 45,
        hp: 47,
      },
      {
        value: "K",
        dmg: 52,
        hp: 48,
      },
      {
        value: "Y",
        dmg: 28,
        hp: 23,
      },
      {
        value: "X",
        dmg: 29,
        hp: 30,
      },
    ],
    [
      {
        value: "M",
        dmg: 40,
        hp: 31,
      },
      {
        value: "A",
        dmg: 44,
        hp: 47,
      },
      {
        value: "R",
        dmg: 42,
        hp: 48,
      },
      {
        value: "T",
        dmg: 37,
        hp: 44,
      },
      {
        value: "U",
        dmg: 19,
        hp: 20,
      },
      {
        value: "N",
        dmg: 15,
        hp: 22,
      },
    ],
    [
      {
        value: "D",
        dmg: 18,
        hp: 14,
      },
      {
        value: "E",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 41,
        hp: 16,
      },
      {
        value: "H",
        dmg: 2,
        hp: 1,
      },
      {
        value: "C",
        dmg: 9,
        hp: 7,
      },
      {
        value: "D",
        dmg: 1,
        hp: 2,
      },
    ],
    [
      {
        value: "Q",
        dmg: 9,
        hp: 2,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "S",
        dmg: 13,
        hp: 11,
      },
      {
        value: "U",
        dmg: 14,
        hp: 11,
      },
      {
        value: "Q",
        dmg: 10,
        hp: 30,
      },
      {
        value: "C",
        dmg: 7,
        hp: 3,
      },
    ],
    [
      {
        value: "D",
        dmg: 9,
        hp: 6,
      },
      {
        value: "L",
        dmg: 32,
        hp: 35,
      },
      {
        value: "O",
        dmg: 44,
        hp: 46,
      },
      {
        value: "W",
        dmg: 63,
        hp: 74,
      },
      {
        value: "E",
        dmg: 41,
        hp: 42,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
    ],
    [
      {
        value: "C",
        dmg: 16,
        hp: 10,
      },
      {
        value: "U",
        dmg: 22,
        hp: 14,
      },
      {
        value: "P",
        dmg: 31,
        hp: 32,
      },
      {
        value: "A",
        dmg: 18,
        hp: 21,
      },
      {
        value: "W",
        dmg: 31,
        hp: 25,
      },
      {
        value: "Q",
        dmg: 3,
        hp: 10,
      },
    ],
    [
      {
        value: "R",
        dmg: 11,
        hp: 18,
      },
      {
        value: "A",
        dmg: 19,
        hp: 20,
      },
      {
        value: "P",
        dmg: 28,
        hp: 24,
      },
      {
        value: "P",
        dmg: 21,
        hp: 17,
      },
      {
        value: "Y",
        dmg: 2,
        hp: 1,
      },
    ],
    [
      {
        value: "P",
        dmg: 30,
        hp: 32,
      },
      {
        value: "E",
        dmg: 45,
        hp: 46,
      },
      {
        value: "R",
        dmg: 44,
        hp: 42,
      },
      {
        value: "K",
        dmg: 27,
        hp: 29,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "F",
        dmg: 14,
        hp: 1,
      },
    ],
    [
      {
        value: "Z",
        dmg: 9,
        hp: 1,
      },
      {
        value: "S",
        dmg: 1,
        hp: 2,
      },
      {
        value: "N",
        dmg: 15,
        hp: 22,
      },
      {
        value: "O",
        dmg: 21,
        hp: 18,
      },
      {
        value: "R",
        dmg: 14,
        hp: 22,
      },
      {
        value: "L",
        dmg: 5,
        hp: 7,
      },
    ],
    [
      {
        value: "M",
        dmg: 18,
        hp: 16,
      },
      {
        value: "I",
        dmg: 23,
        hp: 18,
      },
      {
        value: "D",
        dmg: 19,
        hp: 16,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "C",
        dmg: 9,
        hp: 5,
      },
    ],
    [
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "Z",
        dmg: 5,
        hp: 29,
      },
      {
        value: "N",
        dmg: 3,
        hp: 9,
      },
      {
        value: "P",
        dmg: 9,
        hp: 8,
      },
      {
        value: "H",
        dmg: 5,
        hp: 5,
      },
      {
        value: "M",
        dmg: 14,
        hp: 5,
      },
    ],
    [
      {
        value: "Q",
        dmg: 9,
        hp: 23,
      },
      {
        value: "I",
        dmg: 6,
        hp: 6,
      },
      {
        value: "X",
        dmg: 12,
        hp: 10,
      },
    ],
    [
      {
        value: "F",
        dmg: 15,
        hp: 10,
      },
      {
        value: "I",
        dmg: 12,
        hp: 12,
      },
      {
        value: "X",
        dmg: 39,
        hp: 27,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 4,
      },
      {
        value: "T",
        dmg: 1,
        hp: 12,
      },
    ],
    [
      {
        value: "J",
        dmg: 8,
        hp: 13,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 4,
        hp: 5,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "G",
        dmg: 1,
        hp: 15,
      },
    ],
    [
      {
        value: "M",
        dmg: 46,
        hp: 41,
      },
      {
        value: "E",
        dmg: 45,
        hp: 46,
      },
      {
        value: "D",
        dmg: 51,
        hp: 50,
      },
      {
        value: "I",
        dmg: 33,
        hp: 31,
      },
      {
        value: "A",
        dmg: 28,
        hp: 26,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 12,
        hp: 6,
      },
      {
        value: "U",
        dmg: 7,
        hp: 6,
      },
      {
        value: "B",
        dmg: 2,
        hp: 9,
      },
    ],
    [
      {
        value: "C",
        dmg: 30,
        hp: 36,
      },
      {
        value: "H",
        dmg: 44,
        hp: 44,
      },
      {
        value: "A",
        dmg: 43,
        hp: 44,
      },
      {
        value: "W",
        dmg: 56,
        hp: 41,
      },
    ],
    [
      {
        value: "P",
        dmg: 5,
        hp: 4,
      },
      {
        value: "W",
        dmg: 13,
        hp: 8,
      },
      {
        value: "R",
        dmg: 9,
        hp: 7,
      },
    ],
    [
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
      {
        value: "B",
        dmg: 57,
        hp: 62,
      },
      {
        value: "O",
        dmg: 62,
        hp: 61,
      },
      {
        value: "R",
        dmg: 59,
        hp: 58,
      },
      {
        value: "K",
        dmg: 44,
        hp: 45,
      },
      {
        value: "S",
        dmg: 30,
        hp: 27,
      },
    ],
  ],
  [
    [
      {
        value: "P",
        dmg: 37,
        hp: 34,
      },
      {
        value: "O",
        dmg: 47,
        hp: 46,
      },
      {
        value: "O",
        dmg: 46,
        hp: 46,
      },
      {
        value: "R",
        dmg: 32,
        hp: 36,
      },
      {
        value: "H",
        dmg: 17,
        hp: 15,
      },
      {
        value: "E",
        dmg: 18,
        hp: 19,
      },
      {
        value: "Y",
        dmg: 11,
        hp: 14,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "B",
        dmg: 5,
        hp: 3,
      },
      {
        value: "C",
        dmg: 29,
        hp: 31,
      },
      {
        value: "L",
        dmg: 80,
        hp: 84,
      },
      {
        value: "I",
        dmg: 113,
        hp: 109,
      },
      {
        value: "N",
        dmg: 107,
        hp: 106,
      },
      {
        value: "K",
        dmg: 102,
        hp: 98,
      },
      {
        value: "Y",
        dmg: 53,
        hp: 48,
      },
      {
        value: "X",
        dmg: 29,
        hp: 30,
      },
    ],
    [
      {
        value: "M",
        dmg: 40,
        hp: 31,
      },
      {
        value: "A",
        dmg: 44,
        hp: 47,
      },
      {
        value: "R",
        dmg: 42,
        hp: 48,
      },
      {
        value: "T",
        dmg: 53,
        hp: 60,
      },
      {
        value: "H",
        dmg: 52,
        hp: 51,
      },
      {
        value: "U",
        dmg: 60,
        hp: 61,
      },
      {
        value: "N",
        dmg: 56,
        hp: 63,
      },
      {
        value: "K",
        dmg: 47,
        hp: 43,
      },
    ],
    [
      {
        value: "D",
        dmg: 18,
        hp: 14,
      },
      {
        value: "E",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 50,
        hp: 25,
      },
      {
        value: "H",
        dmg: 24,
        hp: 23,
      },
      {
        value: "O",
        dmg: 27,
        hp: 29,
      },
      {
        value: "N",
        dmg: 18,
        hp: 22,
      },
      {
        value: "C",
        dmg: 9,
        hp: 7,
      },
      {
        value: "D",
        dmg: 1,
        hp: 2,
      },
    ],
    [
      {
        value: "W",
        dmg: 6,
        hp: 19,
      },
      {
        value: "X",
        dmg: 20,
        hp: 13,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "U",
        dmg: 5,
        hp: 2,
      },
      {
        value: "Q",
        dmg: 1,
        hp: 21,
      },
      {
        value: "C",
        dmg: 7,
        hp: 3,
      },
      {
        value: "Q",
        dmg: 11,
        hp: 17,
      },
    ],
    [
      {
        value: "D",
        dmg: 38,
        hp: 35,
      },
      {
        value: "E",
        dmg: 36,
        hp: 36,
      },
      {
        value: "L",
        dmg: 45,
        hp: 48,
      },
      {
        value: "O",
        dmg: 35,
        hp: 37,
      },
      {
        value: "W",
        dmg: 25,
        hp: 36,
      },
      {
        value: "K",
        dmg: 15,
        hp: 11,
      },
      {
        value: "E",
        dmg: 12,
        hp: 13,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
    ],
    [
      {
        value: "C",
        dmg: 16,
        hp: 10,
      },
      {
        value: "U",
        dmg: 18,
        hp: 10,
      },
      {
        value: "B",
        dmg: 28,
        hp: 27,
      },
      {
        value: "A",
        dmg: 18,
        hp: 21,
      },
      {
        value: "T",
        dmg: 21,
        hp: 15,
      },
      {
        value: "W",
        dmg: 18,
        hp: 12,
      },
      {
        value: "Q",
        dmg: 3,
        hp: 10,
      },
      {
        value: "P",
        dmg: 5,
        hp: 6,
      },
    ],
    [
      {
        value: "R",
        dmg: 11,
        hp: 18,
      },
      {
        value: "A",
        dmg: 19,
        hp: 20,
      },
      {
        value: "P",
        dmg: 28,
        hp: 24,
      },
      {
        value: "P",
        dmg: 21,
        hp: 17,
      },
      {
        value: "L",
        dmg: 4,
        hp: 9,
      },
      {
        value: "N",
        dmg: 7,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 6,
        hp: 5,
      },
    ],
    [
      {
        value: "P",
        dmg: 30,
        hp: 32,
      },
      {
        value: "E",
        dmg: 45,
        hp: 46,
      },
      {
        value: "R",
        dmg: 44,
        hp: 42,
      },
      {
        value: "K",
        dmg: 27,
        hp: 29,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "H",
        dmg: 1,
        hp: 2,
      },
      {
        value: "F",
        dmg: 14,
        hp: 1,
      },
      {
        value: "U",
        dmg: 7,
        hp: 3,
      },
    ],
    [
      {
        value: "Z",
        dmg: 9,
        hp: 1,
      },
      {
        value: "S",
        dmg: 17,
        hp: 18,
      },
      {
        value: "N",
        dmg: 31,
        hp: 38,
      },
      {
        value: "O",
        dmg: 37,
        hp: 34,
      },
      {
        value: "W",
        dmg: 51,
        hp: 30,
      },
      {
        value: "R",
        dmg: 1,
        hp: 9,
      },
      {
        value: "L",
        dmg: 9,
        hp: 11,
      },
      {
        value: "O",
        dmg: 7,
        hp: 9,
      },
    ],
    [
      {
        value: "M",
        dmg: 34,
        hp: 32,
      },
      {
        value: "I",
        dmg: 39,
        hp: 34,
      },
      {
        value: "D",
        dmg: 39,
        hp: 36,
      },
      {
        value: "I",
        dmg: 21,
        hp: 24,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "C",
        dmg: 9,
        hp: 5,
      },
    ],
    [
      {
        value: "P",
        dmg: 25,
        hp: 25,
      },
      {
        value: "A",
        dmg: 34,
        hp: 37,
      },
      {
        value: "I",
        dmg: 37,
        hp: 37,
      },
      {
        value: "N",
        dmg: 32,
        hp: 38,
      },
      {
        value: "P",
        dmg: 9,
        hp: 8,
      },
      {
        value: "H",
        dmg: 5,
        hp: 5,
      },
      {
        value: "M",
        dmg: 14,
        hp: 5,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
    ],
    [
      {
        value: "Q",
        dmg: 5,
        hp: 19,
      },
      {
        value: "T",
        dmg: 15,
        hp: 20,
      },
      {
        value: "I",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 17,
        hp: 15,
      },
      {
        value: "X",
        dmg: 16,
        hp: 14,
      },
    ],
    [
      {
        value: "U",
        dmg: 1,
        hp: 4,
      },
      {
        value: "F",
        dmg: 15,
        hp: 10,
      },
      {
        value: "I",
        dmg: 12,
        hp: 12,
      },
      {
        value: "X",
        dmg: 39,
        hp: 27,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 4,
      },
      {
        value: "T",
        dmg: 1,
        hp: 12,
      },
    ],
    [
      {
        value: "J",
        dmg: 8,
        hp: 13,
      },
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 8,
        hp: 9,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 14,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "G",
        dmg: 1,
        hp: 15,
      },
    ],
    [
      {
        value: "M",
        dmg: 82,
        hp: 77,
      },
      {
        value: "E",
        dmg: 81,
        hp: 82,
      },
      {
        value: "D",
        dmg: 103,
        hp: 102,
      },
      {
        value: "I",
        dmg: 85,
        hp: 83,
      },
      {
        value: "A",
        dmg: 84,
        hp: 82,
      },
      {
        value: "L",
        dmg: 59,
        hp: 61,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 21,
        hp: 15,
      },
      {
        value: "U",
        dmg: 20,
        hp: 19,
      },
      {
        value: "G",
        dmg: 14,
        hp: 15,
      },
      {
        value: "B",
        dmg: 2,
        hp: 9,
      },
    ],
    [
      {
        value: "C",
        dmg: 30,
        hp: 36,
      },
      {
        value: "H",
        dmg: 51,
        hp: 51,
      },
      {
        value: "A",
        dmg: 50,
        hp: 51,
      },
      {
        value: "R",
        dmg: 44,
        hp: 39,
      },
      {
        value: "L",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 27,
        hp: 12,
      },
    ],
    [
      {
        value: "P",
        dmg: 5,
        hp: 4,
      },
      {
        value: "W",
        dmg: 17,
        hp: 12,
      },
      {
        value: "E",
        dmg: 10,
        hp: 10,
      },
      {
        value: "R",
        dmg: 13,
        hp: 11,
      },
    ],
    [
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
      {
        value: "B",
        dmg: 32,
        hp: 37,
      },
      {
        value: "O",
        dmg: 37,
        hp: 36,
      },
      {
        value: "R",
        dmg: 34,
        hp: 33,
      },
      {
        value: "K",
        dmg: 19,
        hp: 20,
      },
      {
        value: "L",
        dmg: 14,
        hp: 14,
      },
      {
        value: "E",
        dmg: 16,
        hp: 15,
      },
      {
        value: "S",
        dmg: 18,
        hp: 15,
      },
    ],
  ],
  [
    [
      {
        value: "P",
        dmg: 8,
        hp: 5,
      },
      {
        value: "D",
        dmg: 34,
        hp: 37,
      },
      {
        value: "O",
        dmg: 47,
        hp: 46,
      },
      {
        value: "O",
        dmg: 46,
        hp: 46,
      },
      {
        value: "R",
        dmg: 41,
        hp: 45,
      },
      {
        value: "H",
        dmg: 26,
        hp: 24,
      },
      {
        value: "O",
        dmg: 29,
        hp: 28,
      },
      {
        value: "E",
        dmg: 22,
        hp: 23,
      },
      {
        value: "W",
        dmg: 22,
        hp: 20,
      },
    ],
    [
      {
        value: "B",
        dmg: 46,
        hp: 44,
      },
      {
        value: "L",
        dmg: 96,
        hp: 100,
      },
      {
        value: "I",
        dmg: 129,
        hp: 125,
      },
      {
        value: "N",
        dmg: 123,
        hp: 122,
      },
      {
        value: "K",
        dmg: 127,
        hp: 123,
      },
      {
        value: "Y",
        dmg: 78,
        hp: 73,
      },
      {
        value: "T",
        dmg: 40,
        hp: 44,
      },
      {
        value: "H",
        dmg: 39,
        hp: 39,
      },
      {
        value: "E",
        dmg: 41,
        hp: 44,
      },
    ],
    [
      {
        value: "M",
        dmg: 40,
        hp: 31,
      },
      {
        value: "A",
        dmg: 44,
        hp: 47,
      },
      {
        value: "R",
        dmg: 42,
        hp: 48,
      },
      {
        value: "T",
        dmg: 28,
        hp: 35,
      },
      {
        value: "H",
        dmg: 11,
        hp: 10,
      },
      {
        value: "U",
        dmg: 19,
        hp: 20,
      },
      {
        value: "N",
        dmg: 15,
        hp: 22,
      },
      {
        value: "D",
        dmg: 4,
        hp: 7,
      },
      {
        value: "R",
        dmg: 9,
        hp: 6,
      },
    ],
    [
      {
        value: "D",
        dmg: 18,
        hp: 14,
      },
      {
        value: "E",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 50,
        hp: 25,
      },
      {
        value: "H",
        dmg: 40,
        hp: 39,
      },
      {
        value: "O",
        dmg: 43,
        hp: 45,
      },
      {
        value: "N",
        dmg: 34,
        hp: 38,
      },
      {
        value: "K",
        dmg: 20,
        hp: 19,
      },
      {
        value: "N",
        dmg: 1,
        hp: 3,
      },
      {
        value: "G",
        dmg: 2,
        hp: 9,
      },
    ],
    [
      {
        value: "W",
        dmg: 6,
        hp: 19,
      },
      {
        value: "X",
        dmg: 20,
        hp: 13,
      },
      {
        value: "J",
        dmg: 10,
        hp: 14,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "W",
        dmg: 2,
        hp: 22,
      },
      {
        value: "U",
        dmg: 5,
        hp: 2,
      },
      {
        value: "Q",
        dmg: 1,
        hp: 21,
      },
      {
        value: "C",
        dmg: 7,
        hp: 3,
      },
      {
        value: "Q",
        dmg: 11,
        hp: 17,
      },
    ],
    [
      {
        value: "D",
        dmg: 38,
        hp: 35,
      },
      {
        value: "E",
        dmg: 36,
        hp: 36,
      },
      {
        value: "L",
        dmg: 45,
        hp: 48,
      },
      {
        value: "O",
        dmg: 35,
        hp: 37,
      },
      {
        value: "W",
        dmg: 25,
        hp: 36,
      },
      {
        value: "K",
        dmg: 15,
        hp: 11,
      },
      {
        value: "E",
        dmg: 12,
        hp: 13,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
    ],
    [
      {
        value: "C",
        dmg: 16,
        hp: 10,
      },
      {
        value: "U",
        dmg: 18,
        hp: 10,
      },
      {
        value: "B",
        dmg: 44,
        hp: 43,
      },
      {
        value: "A",
        dmg: 43,
        hp: 46,
      },
      {
        value: "N",
        dmg: 44,
        hp: 48,
      },
      {
        value: "S",
        dmg: 48,
        hp: 46,
      },
      {
        value: "T",
        dmg: 32,
        hp: 26,
      },
      {
        value: "E",
        dmg: 23,
        hp: 26,
      },
      {
        value: "P",
        dmg: 21,
        hp: 22,
      },
    ],
    [
      {
        value: "R",
        dmg: 11,
        hp: 18,
      },
      {
        value: "A",
        dmg: 19,
        hp: 20,
      },
      {
        value: "P",
        dmg: 28,
        hp: 24,
      },
      {
        value: "P",
        dmg: 37,
        hp: 33,
      },
      {
        value: "L",
        dmg: 33,
        hp: 38,
      },
      {
        value: "A",
        dmg: 35,
        hp: 34,
      },
      {
        value: "T",
        dmg: 36,
        hp: 42,
      },
      {
        value: "N",
        dmg: 7,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 6,
        hp: 5,
      },
    ],
    [
      {
        value: "P",
        dmg: 30,
        hp: 32,
      },
      {
        value: "E",
        dmg: 45,
        hp: 46,
      },
      {
        value: "R",
        dmg: 44,
        hp: 42,
      },
      {
        value: "K",
        dmg: 27,
        hp: 29,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "V",
        dmg: 8,
        hp: 12,
      },
      {
        value: "H",
        dmg: 1,
        hp: 2,
      },
      {
        value: "F",
        dmg: 14,
        hp: 1,
      },
      {
        value: "U",
        dmg: 7,
        hp: 3,
      },
    ],
    [
      {
        value: "Z",
        dmg: 9,
        hp: 1,
      },
      {
        value: "S",
        dmg: 17,
        hp: 18,
      },
      {
        value: "N",
        dmg: 47,
        hp: 54,
      },
      {
        value: "O",
        dmg: 62,
        hp: 59,
      },
      {
        value: "W",
        dmg: 76,
        hp: 55,
      },
      {
        value: "L",
        dmg: 43,
        hp: 45,
      },
      {
        value: "O",
        dmg: 20,
        hp: 22,
      },
      {
        value: "R",
        dmg: 14,
        hp: 22,
      },
      {
        value: "M",
        dmg: 11,
        hp: 1,
      },
    ],
    [
      {
        value: "F",
        dmg: 7,
        hp: 1,
      },
      {
        value: "M",
        dmg: 34,
        hp: 32,
      },
      {
        value: "I",
        dmg: 39,
        hp: 34,
      },
      {
        value: "D",
        dmg: 39,
        hp: 36,
      },
      {
        value: "I",
        dmg: 21,
        hp: 24,
      },
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "C",
        dmg: 9,
        hp: 5,
      },
    ],
    [
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 29,
        hp: 38,
      },
      {
        value: "P",
        dmg: 9,
        hp: 8,
      },
      {
        value: "H",
        dmg: 5,
        hp: 5,
      },
      {
        value: "M",
        dmg: 14,
        hp: 5,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
    ],
    [
      {
        value: "Q",
        dmg: 5,
        hp: 19,
      },
      {
        value: "T",
        dmg: 15,
        hp: 20,
      },
      {
        value: "I",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 11,
      },
      {
        value: "B",
        dmg: 2,
        hp: 2,
      },
      {
        value: "X",
        dmg: 12,
        hp: 10,
      },
    ],
    [
      {
        value: "U",
        dmg: 1,
        hp: 4,
      },
      {
        value: "F",
        dmg: 15,
        hp: 10,
      },
      {
        value: "I",
        dmg: 12,
        hp: 12,
      },
      {
        value: "X",
        dmg: 39,
        hp: 27,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 4,
      },
      {
        value: "T",
        dmg: 5,
        hp: 16,
      },
      {
        value: "A",
        dmg: 5,
        hp: 6,
      },
    ],
    [
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 8,
        hp: 9,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 14,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "J",
        dmg: 17,
        hp: 22,
      },
      {
        value: "I",
        dmg: 15,
        hp: 13,
      },
      {
        value: "G",
        dmg: 10,
        hp: 24,
      },
    ],
    [
      {
        value: "M",
        dmg: 95,
        hp: 90,
      },
      {
        value: "E",
        dmg: 94,
        hp: 95,
      },
      {
        value: "D",
        dmg: 100,
        hp: 99,
      },
      {
        value: "I",
        dmg: 82,
        hp: 80,
      },
      {
        value: "C",
        dmg: 92,
        hp: 84,
      },
      {
        value: "A",
        dmg: 65,
        hp: 63,
      },
      {
        value: "L",
        dmg: 65,
        hp: 67,
      },
      {
        value: "N",
        dmg: 6,
        hp: 5,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 21,
        hp: 15,
      },
      {
        value: "U",
        dmg: 20,
        hp: 19,
      },
      {
        value: "G",
        dmg: 30,
        hp: 31,
      },
      {
        value: "L",
        dmg: 33,
        hp: 37,
      },
      {
        value: "I",
        dmg: 36,
        hp: 38,
      },
      {
        value: "T",
        dmg: 35,
        hp: 31,
      },
    ],
    [
      {
        value: "C",
        dmg: 30,
        hp: 36,
      },
      {
        value: "H",
        dmg: 35,
        hp: 35,
      },
      {
        value: "A",
        dmg: 43,
        hp: 44,
      },
      {
        value: "R",
        dmg: 37,
        hp: 32,
      },
      {
        value: "C",
        dmg: 10,
        hp: 16,
      },
      {
        value: "L",
        dmg: 3,
        hp: 6,
      },
      {
        value: "W",
        dmg: 27,
        hp: 12,
      },
    ],
    [
      {
        value: "U",
        dmg: 19,
        hp: 18,
      },
      {
        value: "P",
        dmg: 56,
        hp: 55,
      },
      {
        value: "O",
        dmg: 80,
        hp: 77,
      },
      {
        value: "W",
        dmg: 80,
        hp: 75,
      },
      {
        value: "E",
        dmg: 60,
        hp: 60,
      },
      {
        value: "R",
        dmg: 54,
        hp: 52,
      },
    ],
    [
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
      {
        value: "B",
        dmg: 3,
        hp: 8,
      },
      {
        value: "S",
        dmg: 5,
        hp: 2,
      },
      {
        value: "N",
        dmg: 32,
        hp: 35,
      },
      {
        value: "O",
        dmg: 37,
        hp: 36,
      },
      {
        value: "R",
        dmg: 34,
        hp: 33,
      },
      {
        value: "K",
        dmg: 19,
        hp: 20,
      },
      {
        value: "L",
        dmg: 5,
        hp: 5,
      },
      {
        value: "E",
        dmg: 3,
        hp: 2,
      },
    ],
  ],
  [
    [
      {
        value: "D",
        dmg: 98,
        hp: 101,
      },
      {
        value: "O",
        dmg: 111,
        hp: 110,
      },
      {
        value: "O",
        dmg: 110,
        hp: 110,
      },
      {
        value: "R",
        dmg: 96,
        hp: 100,
      },
      {
        value: "K",
        dmg: 84,
        hp: 84,
      },
      {
        value: "N",
        dmg: 94,
        hp: 97,
      },
      {
        value: "O",
        dmg: 100,
        hp: 99,
      },
      {
        value: "B",
        dmg: 99,
        hp: 97,
      },
      {
        value: "H",
        dmg: 4,
        hp: 2,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "B",
        dmg: 46,
        hp: 44,
      },
      {
        value: "L",
        dmg: 96,
        hp: 100,
      },
      {
        value: "I",
        dmg: 129,
        hp: 125,
      },
      {
        value: "N",
        dmg: 123,
        hp: 122,
      },
      {
        value: "K",
        dmg: 127,
        hp: 123,
      },
      {
        value: "Y",
        dmg: 78,
        hp: 73,
      },
      {
        value: "T",
        dmg: 56,
        hp: 60,
      },
      {
        value: "H",
        dmg: 64,
        hp: 64,
      },
      {
        value: "E",
        dmg: 66,
        hp: 69,
      },
      {
        value: "Y",
        dmg: 30,
        hp: 37,
      },
    ],
    [
      {
        value: "M",
        dmg: 40,
        hp: 31,
      },
      {
        value: "A",
        dmg: 44,
        hp: 47,
      },
      {
        value: "R",
        dmg: 42,
        hp: 48,
      },
      {
        value: "T",
        dmg: 77,
        hp: 84,
      },
      {
        value: "H",
        dmg: 60,
        hp: 59,
      },
      {
        value: "U",
        dmg: 109,
        hp: 110,
      },
      {
        value: "N",
        dmg: 105,
        hp: 112,
      },
      {
        value: "D",
        dmg: 98,
        hp: 101,
      },
      {
        value: "E",
        dmg: 102,
        hp: 99,
      },
      {
        value: "R",
        dmg: 87,
        hp: 84,
      },
    ],
    [
      {
        value: "D",
        dmg: 18,
        hp: 14,
      },
      {
        value: "E",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 50,
        hp: 25,
      },
      {
        value: "H",
        dmg: 40,
        hp: 39,
      },
      {
        value: "O",
        dmg: 43,
        hp: 45,
      },
      {
        value: "N",
        dmg: 34,
        hp: 38,
      },
      {
        value: "K",
        dmg: 20,
        hp: 19,
      },
      {
        value: "N",
        dmg: 1,
        hp: 3,
      },
      {
        value: "G",
        dmg: 2,
        hp: 9,
      },
    ],
    [
      {
        value: "W",
        dmg: 6,
        hp: 19,
      },
      {
        value: "X",
        dmg: 20,
        hp: 13,
      },
      {
        value: "J",
        dmg: 10,
        hp: 14,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "W",
        dmg: 2,
        hp: 22,
      },
      {
        value: "X",
        dmg: 9,
        hp: 15,
      },
      {
        value: "Q",
        dmg: 1,
        hp: 21,
      },
      {
        value: "C",
        dmg: 7,
        hp: 3,
      },
      {
        value: "Q",
        dmg: 11,
        hp: 17,
      },
    ],
    [
      {
        value: "D",
        dmg: 9,
        hp: 6,
      },
      {
        value: "B",
        dmg: 39,
        hp: 43,
      },
      {
        value: "E",
        dmg: 45,
        hp: 45,
      },
      {
        value: "L",
        dmg: 54,
        hp: 57,
      },
      {
        value: "O",
        dmg: 44,
        hp: 46,
      },
      {
        value: "W",
        dmg: 50,
        hp: 61,
      },
      {
        value: "K",
        dmg: 15,
        hp: 11,
      },
      {
        value: "E",
        dmg: 12,
        hp: 13,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
    ],
    [
      {
        value: "C",
        dmg: 48,
        hp: 42,
      },
      {
        value: "L",
        dmg: 45,
        hp: 45,
      },
      {
        value: "U",
        dmg: 50,
        hp: 42,
      },
      {
        value: "B",
        dmg: 47,
        hp: 46,
      },
      {
        value: "S",
        dmg: 32,
        hp: 30,
      },
      {
        value: "T",
        dmg: 25,
        hp: 19,
      },
      {
        value: "E",
        dmg: 20,
        hp: 23,
      },
      {
        value: "F",
        dmg: 38,
        hp: 27,
      },
      {
        value: "A",
        dmg: 18,
        hp: 21,
      },
      {
        value: "N",
        dmg: 19,
        hp: 23,
      },
    ],
    [
      {
        value: "A",
        dmg: 10,
        hp: 11,
      },
      {
        value: "P",
        dmg: 19,
        hp: 15,
      },
      {
        value: "P",
        dmg: 46,
        hp: 42,
      },
      {
        value: "L",
        dmg: 33,
        hp: 38,
      },
      {
        value: "I",
        dmg: 31,
        hp: 30,
      },
      {
        value: "C",
        dmg: 39,
        hp: 36,
      },
      {
        value: "A",
        dmg: 40,
        hp: 39,
      },
      {
        value: "T",
        dmg: 33,
        hp: 39,
      },
      {
        value: "O",
        dmg: 21,
        hp: 22,
      },
      {
        value: "N",
        dmg: 16,
        hp: 24,
      },
    ],
    [
      {
        value: "R",
        dmg: 5,
        hp: 11,
      },
      {
        value: "P",
        dmg: 30,
        hp: 32,
      },
      {
        value: "E",
        dmg: 45,
        hp: 46,
      },
      {
        value: "R",
        dmg: 44,
        hp: 42,
      },
      {
        value: "K",
        dmg: 27,
        hp: 29,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "V",
        dmg: 8,
        hp: 12,
      },
      {
        value: "H",
        dmg: 1,
        hp: 2,
      },
      {
        value: "F",
        dmg: 14,
        hp: 1,
      },
      {
        value: "U",
        dmg: 7,
        hp: 3,
      },
    ],
    [
      {
        value: "S",
        dmg: 123,
        hp: 124,
      },
      {
        value: "N",
        dmg: 153,
        hp: 160,
      },
      {
        value: "O",
        dmg: 159,
        hp: 156,
      },
      {
        value: "W",
        dmg: 173,
        hp: 152,
      },
      {
        value: "S",
        dmg: 152,
        hp: 154,
      },
      {
        value: "T",
        dmg: 124,
        hp: 130,
      },
      {
        value: "O",
        dmg: 126,
        hp: 128,
      },
      {
        value: "R",
        dmg: 120,
        hp: 128,
      },
      {
        value: "M",
        dmg: 117,
        hp: 107,
      },
      {
        value: "L",
        dmg: 5,
        hp: 7,
      },
    ],
    [
      {
        value: "F",
        dmg: 7,
        hp: 1,
      },
      {
        value: "M",
        dmg: 34,
        hp: 32,
      },
      {
        value: "I",
        dmg: 39,
        hp: 34,
      },
      {
        value: "D",
        dmg: 39,
        hp: 36,
      },
      {
        value: "I",
        dmg: 21,
        hp: 24,
      },
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "C",
        dmg: 9,
        hp: 5,
      },
      {
        value: "Q",
        dmg: 16,
        hp: 27,
      },
    ],
    [
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 29,
        hp: 38,
      },
      {
        value: "P",
        dmg: 9,
        hp: 8,
      },
      {
        value: "H",
        dmg: 5,
        hp: 5,
      },
      {
        value: "M",
        dmg: 14,
        hp: 5,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "D",
        dmg: 5,
        hp: 4,
      },
    ],
    [
      {
        value: "Q",
        dmg: 5,
        hp: 19,
      },
      {
        value: "C",
        dmg: 4,
        hp: 7,
      },
      {
        value: "T",
        dmg: 15,
        hp: 20,
      },
      {
        value: "I",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 11,
      },
      {
        value: "B",
        dmg: 2,
        hp: 2,
      },
      {
        value: "X",
        dmg: 12,
        hp: 10,
      },
    ],
    [
      {
        value: "U",
        dmg: 1,
        hp: 4,
      },
      {
        value: "F",
        dmg: 15,
        hp: 10,
      },
      {
        value: "I",
        dmg: 12,
        hp: 12,
      },
      {
        value: "X",
        dmg: 39,
        hp: 27,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 4,
      },
      {
        value: "T",
        dmg: 1,
        hp: 12,
      },
      {
        value: "P",
        dmg: 16,
        hp: 12,
      },
      {
        value: "A",
        dmg: 5,
        hp: 6,
      },
    ],
    [
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 8,
        hp: 9,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 14,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "J",
        dmg: 17,
        hp: 22,
      },
      {
        value: "I",
        dmg: 15,
        hp: 13,
      },
      {
        value: "G",
        dmg: 10,
        hp: 24,
      },
    ],
    [
      {
        value: "M",
        dmg: 95,
        hp: 90,
      },
      {
        value: "E",
        dmg: 94,
        hp: 95,
      },
      {
        value: "D",
        dmg: 100,
        hp: 99,
      },
      {
        value: "I",
        dmg: 82,
        hp: 80,
      },
      {
        value: "C",
        dmg: 92,
        hp: 84,
      },
      {
        value: "A",
        dmg: 65,
        hp: 63,
      },
      {
        value: "L",
        dmg: 65,
        hp: 67,
      },
      {
        value: "N",
        dmg: 10,
        hp: 9,
      },
      {
        value: "E",
        dmg: 13,
        hp: 10,
      },
      {
        value: "S",
        dmg: 6,
        hp: 7,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 37,
        hp: 31,
      },
      {
        value: "U",
        dmg: 45,
        hp: 44,
      },
      {
        value: "G",
        dmg: 39,
        hp: 40,
      },
      {
        value: "S",
        dmg: 44,
        hp: 42,
      },
      {
        value: "L",
        dmg: 33,
        hp: 37,
      },
      {
        value: "I",
        dmg: 36,
        hp: 38,
      },
      {
        value: "T",
        dmg: 35,
        hp: 31,
      },
    ],
    [
      {
        value: "C",
        dmg: 30,
        hp: 36,
      },
      {
        value: "H",
        dmg: 35,
        hp: 35,
      },
      {
        value: "A",
        dmg: 43,
        hp: 44,
      },
      {
        value: "R",
        dmg: 37,
        hp: 32,
      },
      {
        value: "C",
        dmg: 19,
        hp: 25,
      },
      {
        value: "A",
        dmg: 15,
        hp: 15,
      },
      {
        value: "L",
        dmg: 16,
        hp: 19,
      },
      {
        value: "W",
        dmg: 27,
        hp: 12,
      },
    ],
    [
      {
        value: "U",
        dmg: 10,
        hp: 9,
      },
      {
        value: "P",
        dmg: 39,
        hp: 38,
      },
      {
        value: "E",
        dmg: 30,
        hp: 35,
      },
      {
        value: "P",
        dmg: 68,
        hp: 67,
      },
      {
        value: "O",
        dmg: 87,
        hp: 84,
      },
      {
        value: "W",
        dmg: 80,
        hp: 75,
      },
      {
        value: "E",
        dmg: 60,
        hp: 60,
      },
      {
        value: "R",
        dmg: 54,
        hp: 52,
      },
    ],
    [
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
      {
        value: "S",
        dmg: 54,
        hp: 51,
      },
      {
        value: "N",
        dmg: 81,
        hp: 84,
      },
      {
        value: "O",
        dmg: 86,
        hp: 85,
      },
      {
        value: "R",
        dmg: 83,
        hp: 82,
      },
      {
        value: "K",
        dmg: 68,
        hp: 69,
      },
      {
        value: "E",
        dmg: 56,
        hp: 55,
      },
      {
        value: "L",
        dmg: 71,
        hp: 71,
      },
      {
        value: "I",
        dmg: 21,
        hp: 19,
      },
      {
        value: "N",
        dmg: 15,
        hp: 15,
      },
    ],
  ],
  [
    [
      {
        value: "D",
        dmg: 98,
        hp: 101,
      },
      {
        value: "O",
        dmg: 111,
        hp: 110,
      },
      {
        value: "O",
        dmg: 110,
        hp: 110,
      },
      {
        value: "R",
        dmg: 96,
        hp: 100,
      },
      {
        value: "K",
        dmg: 84,
        hp: 84,
      },
      {
        value: "N",
        dmg: 94,
        hp: 97,
      },
      {
        value: "O",
        dmg: 100,
        hp: 99,
      },
      {
        value: "B",
        dmg: 99,
        hp: 97,
      },
      {
        value: "H",
        dmg: 4,
        hp: 2,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "E",
        dmg: 7,
        hp: 10,
      },
      {
        value: "E",
        dmg: 7,
        hp: 10,
      },
      {
        value: "Y",
        dmg: 5,
        hp: 12,
      },
      {
        value: "B",
        dmg: 46,
        hp: 44,
      },
      {
        value: "L",
        dmg: 96,
        hp: 100,
      },
      {
        value: "I",
        dmg: 129,
        hp: 125,
      },
      {
        value: "N",
        dmg: 123,
        hp: 122,
      },
      {
        value: "K",
        dmg: 102,
        hp: 98,
      },
      {
        value: "Y",
        dmg: 53,
        hp: 48,
      },
      {
        value: "T",
        dmg: 6,
        hp: 10,
      },
      {
        value: "H",
        dmg: 1,
        hp: 1,
      },
    ],
    [
      {
        value: "T",
        dmg: 52,
        hp: 59,
      },
      {
        value: "H",
        dmg: 60,
        hp: 59,
      },
      {
        value: "U",
        dmg: 109,
        hp: 110,
      },
      {
        value: "N",
        dmg: 105,
        hp: 112,
      },
      {
        value: "D",
        dmg: 98,
        hp: 101,
      },
      {
        value: "E",
        dmg: 111,
        hp: 108,
      },
      {
        value: "R",
        dmg: 96,
        hp: 93,
      },
      {
        value: "R",
        dmg: 13,
        hp: 19,
      },
      {
        value: "M",
        dmg: 11,
        hp: 2,
      },
    ],
    [
      {
        value: "D",
        dmg: 18,
        hp: 14,
      },
      {
        value: "E",
        dmg: 19,
        hp: 22,
      },
      {
        value: "W",
        dmg: 50,
        hp: 25,
      },
      {
        value: "H",
        dmg: 89,
        hp: 88,
      },
      {
        value: "O",
        dmg: 92,
        hp: 94,
      },
      {
        value: "N",
        dmg: 83,
        hp: 87,
      },
      {
        value: "K",
        dmg: 98,
        hp: 97,
      },
      {
        value: "I",
        dmg: 96,
        hp: 96,
      },
      {
        value: "N",
        dmg: 88,
        hp: 90,
      },
      {
        value: "G",
        dmg: 76,
        hp: 83,
      },
    ],
    [
      {
        value: "W",
        dmg: 6,
        hp: 19,
      },
      {
        value: "X",
        dmg: 20,
        hp: 13,
      },
      {
        value: "J",
        dmg: 10,
        hp: 14,
      },
      {
        value: "J",
        dmg: 13,
        hp: 9,
      },
      {
        value: "W",
        dmg: 2,
        hp: 22,
      },
      {
        value: "X",
        dmg: 9,
        hp: 15,
      },
      {
        value: "Q",
        dmg: 13,
        hp: 29,
      },
      {
        value: "Q",
        dmg: 11,
        hp: 17,
      },
      {
        value: "W",
        dmg: 6,
        hp: 19,
      },
      {
        value: "V",
        dmg: 2,
        hp: 15,
      },
    ],
    [
      {
        value: "D",
        dmg: 9,
        hp: 6,
      },
      {
        value: "B",
        dmg: 39,
        hp: 43,
      },
      {
        value: "E",
        dmg: 45,
        hp: 45,
      },
      {
        value: "L",
        dmg: 54,
        hp: 57,
      },
      {
        value: "O",
        dmg: 44,
        hp: 46,
      },
      {
        value: "W",
        dmg: 50,
        hp: 61,
      },
      {
        value: "K",
        dmg: 15,
        hp: 11,
      },
      {
        value: "E",
        dmg: 12,
        hp: 13,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
      {
        value: "B",
        dmg: 2,
        hp: 9,
      },
      {
        value: "D",
        dmg: 6,
        hp: 4,
      },
    ],
    [
      {
        value: "C",
        dmg: 48,
        hp: 42,
      },
      {
        value: "L",
        dmg: 45,
        hp: 45,
      },
      {
        value: "U",
        dmg: 50,
        hp: 42,
      },
      {
        value: "B",
        dmg: 47,
        hp: 46,
      },
      {
        value: "S",
        dmg: 133,
        hp: 131,
      },
      {
        value: "T",
        dmg: 126,
        hp: 120,
      },
      {
        value: "A",
        dmg: 128,
        hp: 131,
      },
      {
        value: "Y",
        dmg: 148,
        hp: 143,
      },
      {
        value: "E",
        dmg: 123,
        hp: 126,
      },
      {
        value: "R",
        dmg: 116,
        hp: 114,
      },
      {
        value: "S",
        dmg: 64,
        hp: 61,
      },
    ],
    [
      {
        value: "R",
        dmg: 5,
        hp: 11,
      },
      {
        value: "P",
        dmg: 55,
        hp: 57,
      },
      {
        value: "E",
        dmg: 86,
        hp: 87,
      },
      {
        value: "R",
        dmg: 85,
        hp: 83,
      },
      {
        value: "K",
        dmg: 68,
        hp: 70,
      },
      {
        value: "S",
        dmg: 45,
        hp: 43,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "V",
        dmg: 8,
        hp: 12,
      },
      {
        value: "H",
        dmg: 1,
        hp: 2,
      },
      {
        value: "F",
        dmg: 14,
        hp: 1,
      },
      {
        value: "U",
        dmg: 7,
        hp: 3,
      },
    ],
    [
      {
        value: "S",
        dmg: 123,
        hp: 124,
      },
      {
        value: "N",
        dmg: 153,
        hp: 160,
      },
      {
        value: "O",
        dmg: 159,
        hp: 156,
      },
      {
        value: "W",
        dmg: 173,
        hp: 152,
      },
      {
        value: "S",
        dmg: 152,
        hp: 154,
      },
      {
        value: "T",
        dmg: 124,
        hp: 130,
      },
      {
        value: "O",
        dmg: 126,
        hp: 128,
      },
      {
        value: "R",
        dmg: 120,
        hp: 128,
      },
      {
        value: "M",
        dmg: 121,
        hp: 111,
      },
      {
        value: "I",
        dmg: 14,
        hp: 12,
      },
      {
        value: "N",
        dmg: 7,
        hp: 14,
      },
    ],
    [
      {
        value: "F",
        dmg: 7,
        hp: 1,
      },
      {
        value: "M",
        dmg: 34,
        hp: 32,
      },
      {
        value: "I",
        dmg: 39,
        hp: 34,
      },
      {
        value: "D",
        dmg: 39,
        hp: 36,
      },
      {
        value: "I",
        dmg: 21,
        hp: 24,
      },
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "N",
        dmg: 1,
        hp: 7,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "Q",
        dmg: 16,
        hp: 27,
      },
      {
        value: "F",
        dmg: 3,
        hp: 2,
      },
    ],
    [
      {
        value: "W",
        dmg: 26,
        hp: 7,
      },
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 29,
        hp: 38,
      },
      {
        value: "P",
        dmg: 9,
        hp: 8,
      },
      {
        value: "H",
        dmg: 5,
        hp: 5,
      },
      {
        value: "M",
        dmg: 14,
        hp: 5,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "D",
        dmg: 5,
        hp: 4,
      },
    ],
    [
      {
        value: "Q",
        dmg: 5,
        hp: 19,
      },
      {
        value: "C",
        dmg: 4,
        hp: 7,
      },
      {
        value: "T",
        dmg: 31,
        hp: 36,
      },
      {
        value: "I",
        dmg: 31,
        hp: 31,
      },
      {
        value: "E",
        dmg: 33,
        hp: 31,
      },
      {
        value: "S",
        dmg: 21,
        hp: 22,
      },
      {
        value: "B",
        dmg: 2,
        hp: 2,
      },
      {
        value: "X",
        dmg: 12,
        hp: 10,
      },
    ],
    [
      {
        value: "U",
        dmg: 1,
        hp: 4,
      },
      {
        value: "F",
        dmg: 6,
        hp: 1,
      },
      {
        value: "Z",
        dmg: 23,
        hp: 16,
      },
      {
        value: "I",
        dmg: 3,
        hp: 3,
      },
      {
        value: "X",
        dmg: 30,
        hp: 18,
      },
      {
        value: "Y",
        dmg: 7,
        hp: 4,
      },
      {
        value: "T",
        dmg: 1,
        hp: 12,
      },
      {
        value: "P",
        dmg: 16,
        hp: 12,
      },
      {
        value: "A",
        dmg: 5,
        hp: 6,
      },
    ],
    [
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 8,
        hp: 9,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 14,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "J",
        dmg: 8,
        hp: 13,
      },
      {
        value: "I",
        dmg: 19,
        hp: 17,
      },
      {
        value: "T",
        dmg: 31,
        hp: 30,
      },
      {
        value: "A",
        dmg: 29,
        hp: 28,
      },
      {
        value: "G",
        dmg: 14,
        hp: 28,
      },
    ],
    [
      {
        value: "M",
        dmg: 95,
        hp: 90,
      },
      {
        value: "E",
        dmg: 94,
        hp: 95,
      },
      {
        value: "D",
        dmg: 100,
        hp: 99,
      },
      {
        value: "I",
        dmg: 82,
        hp: 80,
      },
      {
        value: "C",
        dmg: 92,
        hp: 84,
      },
      {
        value: "A",
        dmg: 65,
        hp: 63,
      },
      {
        value: "L",
        dmg: 65,
        hp: 67,
      },
      {
        value: "N",
        dmg: 10,
        hp: 9,
      },
      {
        value: "E",
        dmg: 13,
        hp: 10,
      },
      {
        value: "S",
        dmg: 6,
        hp: 7,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 37,
        hp: 31,
      },
      {
        value: "U",
        dmg: 45,
        hp: 44,
      },
      {
        value: "G",
        dmg: 39,
        hp: 40,
      },
      {
        value: "S",
        dmg: 69,
        hp: 67,
      },
      {
        value: "L",
        dmg: 74,
        hp: 78,
      },
      {
        value: "I",
        dmg: 86,
        hp: 88,
      },
      {
        value: "T",
        dmg: 85,
        hp: 81,
      },
      {
        value: "S",
        dmg: 53,
        hp: 52,
      },
    ],
    [
      {
        value: "C",
        dmg: 175,
        hp: 181,
      },
      {
        value: "H",
        dmg: 180,
        hp: 180,
      },
      {
        value: "A",
        dmg: 204,
        hp: 205,
      },
      {
        value: "R",
        dmg: 198,
        hp: 193,
      },
      {
        value: "C",
        dmg: 212,
        hp: 218,
      },
      {
        value: "O",
        dmg: 205,
        hp: 203,
      },
      {
        value: "A",
        dmg: 201,
        hp: 201,
      },
      {
        value: "L",
        dmg: 202,
        hp: 205,
      },
      {
        value: "S",
        dmg: 116,
        hp: 117,
      },
      {
        value: "W",
        dmg: 27,
        hp: 12,
      },
    ],
    [
      {
        value: "S",
        dmg: 153,
        hp: 153,
      },
      {
        value: "U",
        dmg: 160,
        hp: 159,
      },
      {
        value: "P",
        dmg: 189,
        hp: 188,
      },
      {
        value: "E",
        dmg: 175,
        hp: 180,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "P",
        dmg: 159,
        hp: 158,
      },
      {
        value: "O",
        dmg: 171,
        hp: 168,
      },
      {
        value: "W",
        dmg: 180,
        hp: 175,
      },
      {
        value: "E",
        dmg: 160,
        hp: 160,
      },
      {
        value: "R",
        dmg: 154,
        hp: 152,
      },
    ],
    [
      {
        value: "S",
        dmg: 154,
        hp: 151,
      },
      {
        value: "N",
        dmg: 181,
        hp: 184,
      },
      {
        value: "O",
        dmg: 186,
        hp: 185,
      },
      {
        value: "R",
        dmg: 183,
        hp: 182,
      },
      {
        value: "K",
        dmg: 168,
        hp: 169,
      },
      {
        value: "E",
        dmg: 156,
        hp: 155,
      },
      {
        value: "L",
        dmg: 187,
        hp: 187,
      },
      {
        value: "I",
        dmg: 146,
        hp: 144,
      },
      {
        value: "N",
        dmg: 140,
        hp: 140,
      },
      {
        value: "G",
        dmg: 127,
        hp: 133,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
  [
    [
      {
        value: "D",
        dmg: 98,
        hp: 101,
      },
      {
        value: "O",
        dmg: 111,
        hp: 110,
      },
      {
        value: "O",
        dmg: 110,
        hp: 110,
      },
      {
        value: "R",
        dmg: 96,
        hp: 100,
      },
      {
        value: "K",
        dmg: 84,
        hp: 84,
      },
      {
        value: "N",
        dmg: 94,
        hp: 97,
      },
      {
        value: "O",
        dmg: 100,
        hp: 99,
      },
      {
        value: "B",
        dmg: 99,
        hp: 97,
      },
      {
        value: "H",
        dmg: 4,
        hp: 2,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "E",
        dmg: 76,
        hp: 79,
      },
      {
        value: "Y",
        dmg: 82,
        hp: 89,
      },
      {
        value: "E",
        dmg: 80,
        hp: 83,
      },
      {
        value: "B",
        dmg: 110,
        hp: 108,
      },
      {
        value: "L",
        dmg: 160,
        hp: 164,
      },
      {
        value: "I",
        dmg: 193,
        hp: 189,
      },
      {
        value: "N",
        dmg: 187,
        hp: 186,
      },
      {
        value: "K",
        dmg: 166,
        hp: 162,
      },
      {
        value: "Y",
        dmg: 53,
        hp: 48,
      },
      {
        value: "N",
        dmg: 2,
        hp: 9,
      },
      {
        value: "G",
        dmg: 1,
        hp: 2,
      },
    ],
    [
      {
        value: "E",
        dmg: 7,
        hp: 7,
      },
      {
        value: "L",
        dmg: 20,
        hp: 23,
      },
      {
        value: "O",
        dmg: 19,
        hp: 21,
      },
      {
        value: "W",
        dmg: 25,
        hp: 36,
      },
      {
        value: "K",
        dmg: 15,
        hp: 11,
      },
      {
        value: "E",
        dmg: 12,
        hp: 13,
      },
      {
        value: "Y",
        dmg: 16,
        hp: 19,
      },
      {
        value: "B",
        dmg: 15,
        hp: 22,
      },
      {
        value: "O",
        dmg: 19,
        hp: 20,
      },
      {
        value: "D",
        dmg: 19,
        hp: 17,
      },
    ],
    [
      {
        value: "C",
        dmg: 48,
        hp: 42,
      },
      {
        value: "L",
        dmg: 45,
        hp: 45,
      },
      {
        value: "U",
        dmg: 50,
        hp: 42,
      },
      {
        value: "B",
        dmg: 47,
        hp: 46,
      },
      {
        value: "S",
        dmg: 133,
        hp: 131,
      },
      {
        value: "T",
        dmg: 126,
        hp: 120,
      },
      {
        value: "A",
        dmg: 128,
        hp: 131,
      },
      {
        value: "Y",
        dmg: 148,
        hp: 143,
      },
      {
        value: "E",
        dmg: 123,
        hp: 126,
      },
      {
        value: "R",
        dmg: 116,
        hp: 114,
      },
      {
        value: "S",
        dmg: 64,
        hp: 61,
      },
      {
        value: "N",
        dmg: 6,
        hp: 10,
      },
    ],
    [
      {
        value: "R",
        dmg: 5,
        hp: 11,
      },
      {
        value: "P",
        dmg: 55,
        hp: 57,
      },
      {
        value: "E",
        dmg: 86,
        hp: 87,
      },
      {
        value: "R",
        dmg: 85,
        hp: 83,
      },
      {
        value: "K",
        dmg: 68,
        hp: 70,
      },
      {
        value: "S",
        dmg: 45,
        hp: 43,
      },
      {
        value: "M",
        dmg: 4,
        hp: 1,
      },
      {
        value: "V",
        dmg: 8,
        hp: 12,
      },
      {
        value: "H",
        dmg: 1,
        hp: 2,
      },
      {
        value: "F",
        dmg: 23,
        hp: 10,
      },
      {
        value: "U",
        dmg: 16,
        hp: 12,
      },
      {
        value: "B",
        dmg: 15,
        hp: 17,
      },
    ],
    [
      {
        value: "S",
        dmg: 123,
        hp: 124,
      },
      {
        value: "N",
        dmg: 153,
        hp: 160,
      },
      {
        value: "O",
        dmg: 159,
        hp: 156,
      },
      {
        value: "W",
        dmg: 173,
        hp: 152,
      },
      {
        value: "S",
        dmg: 216,
        hp: 218,
      },
      {
        value: "T",
        dmg: 188,
        hp: 194,
      },
      {
        value: "O",
        dmg: 190,
        hp: 192,
      },
      {
        value: "R",
        dmg: 184,
        hp: 192,
      },
      {
        value: "M",
        dmg: 201,
        hp: 191,
      },
      {
        value: "I",
        dmg: 103,
        hp: 101,
      },
      {
        value: "N",
        dmg: 96,
        hp: 103,
      },
      {
        value: "G",
        dmg: 90,
        hp: 92,
      },
    ],
    [
      {
        value: "F",
        dmg: 7,
        hp: 1,
      },
      {
        value: "M",
        dmg: 34,
        hp: 32,
      },
      {
        value: "I",
        dmg: 39,
        hp: 34,
      },
      {
        value: "D",
        dmg: 39,
        hp: 36,
      },
      {
        value: "I",
        dmg: 21,
        hp: 24,
      },
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "N",
        dmg: 1,
        hp: 7,
      },
      {
        value: "X",
        dmg: 23,
        hp: 21,
      },
      {
        value: "Z",
        dmg: 25,
        hp: 25,
      },
      {
        value: "Q",
        dmg: 16,
        hp: 27,
      },
      {
        value: "F",
        dmg: 3,
        hp: 2,
      },
      {
        value: "F",
        dmg: 13,
        hp: 1,
      },
    ],
    [
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 38,
        hp: 47,
      },
      {
        value: "W",
        dmg: 35,
        hp: 16,
      },
      {
        value: "P",
        dmg: 27,
        hp: 26,
      },
      {
        value: "H",
        dmg: 23,
        hp: 23,
      },
      {
        value: "O",
        dmg: 28,
        hp: 27,
      },
      {
        value: "M",
        dmg: 23,
        hp: 14,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "D",
        dmg: 5,
        hp: 4,
      },
    ],
    [
      {
        value: "R",
        dmg: 1,
        hp: 8,
      },
      {
        value: "T",
        dmg: 3,
        hp: 6,
      },
      {
        value: "N",
        dmg: 3,
        hp: 5,
      },
      {
        value: "K",
        dmg: 8,
        hp: 9,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 14,
      },
      {
        value: "C",
        dmg: 6,
        hp: 5,
      },
      {
        value: "D",
        dmg: 9,
        hp: 10,
      },
      {
        value: "I",
        dmg: 10,
        hp: 8,
      },
      {
        value: "Y",
        dmg: 8,
        hp: 2,
      },
      {
        value: "T",
        dmg: 18,
        hp: 17,
      },
      {
        value: "A",
        dmg: 20,
        hp: 19,
      },
      {
        value: "G",
        dmg: 14,
        hp: 28,
      },
    ],
    [
      {
        value: "M",
        dmg: 95,
        hp: 90,
      },
      {
        value: "E",
        dmg: 94,
        hp: 95,
      },
      {
        value: "D",
        dmg: 100,
        hp: 99,
      },
      {
        value: "I",
        dmg: 82,
        hp: 80,
      },
      {
        value: "C",
        dmg: 92,
        hp: 84,
      },
      {
        value: "A",
        dmg: 65,
        hp: 63,
      },
      {
        value: "L",
        dmg: 65,
        hp: 67,
      },
      {
        value: "N",
        dmg: 10,
        hp: 9,
      },
      {
        value: "E",
        dmg: 13,
        hp: 10,
      },
      {
        value: "S",
        dmg: 6,
        hp: 7,
      },
    ],
    [
      {
        value: "K",
        dmg: 15,
        hp: 15,
      },
      {
        value: "E",
        dmg: 13,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 15,
        hp: 16,
      },
      {
        value: "M",
        dmg: 37,
        hp: 31,
      },
      {
        value: "U",
        dmg: 45,
        hp: 44,
      },
      {
        value: "G",
        dmg: 39,
        hp: 40,
      },
      {
        value: "S",
        dmg: 44,
        hp: 42,
      },
      {
        value: "L",
        dmg: 74,
        hp: 78,
      },
      {
        value: "I",
        dmg: 77,
        hp: 79,
      },
      {
        value: "T",
        dmg: 89,
        hp: 85,
      },
      {
        value: "E",
        dmg: 60,
        hp: 64,
      },
      {
        value: "S",
        dmg: 41,
        hp: 40,
      },
    ],
    [
      {
        value: "C",
        dmg: 175,
        hp: 181,
      },
      {
        value: "H",
        dmg: 180,
        hp: 180,
      },
      {
        value: "A",
        dmg: 204,
        hp: 205,
      },
      {
        value: "R",
        dmg: 198,
        hp: 193,
      },
      {
        value: "C",
        dmg: 212,
        hp: 218,
      },
      {
        value: "O",
        dmg: 205,
        hp: 203,
      },
      {
        value: "A",
        dmg: 201,
        hp: 201,
      },
      {
        value: "L",
        dmg: 202,
        hp: 205,
      },
      {
        value: "S",
        dmg: 132,
        hp: 133,
      },
      {
        value: "W",
        dmg: 52,
        hp: 37,
      },
      {
        value: "A",
        dmg: 30,
        hp: 31,
      },
      {
        value: "N",
        dmg: 31,
        hp: 39,
      },
    ],
    [
      {
        value: "S",
        dmg: 153,
        hp: 153,
      },
      {
        value: "U",
        dmg: 160,
        hp: 159,
      },
      {
        value: "P",
        dmg: 189,
        hp: 188,
      },
      {
        value: "E",
        dmg: 175,
        hp: 180,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "P",
        dmg: 159,
        hp: 158,
      },
      {
        value: "O",
        dmg: 171,
        hp: 168,
      },
      {
        value: "W",
        dmg: 180,
        hp: 175,
      },
      {
        value: "E",
        dmg: 160,
        hp: 160,
      },
      {
        value: "R",
        dmg: 154,
        hp: 152,
      },
      {
        value: "L",
        dmg: 4,
        hp: 14,
      },
    ],
    [
      {
        value: "S",
        dmg: 275,
        hp: 272,
      },
      {
        value: "N",
        dmg: 302,
        hp: 305,
      },
      {
        value: "O",
        dmg: 307,
        hp: 306,
      },
      {
        value: "R",
        dmg: 304,
        hp: 303,
      },
      {
        value: "K",
        dmg: 289,
        hp: 290,
      },
      {
        value: "E",
        dmg: 277,
        hp: 276,
      },
      {
        value: "L",
        dmg: 333,
        hp: 333,
      },
      {
        value: "I",
        dmg: 308,
        hp: 306,
      },
      {
        value: "N",
        dmg: 302,
        hp: 302,
      },
      {
        value: "G",
        dmg: 289,
        hp: 295,
      },
      {
        value: "S",
        dmg: 168,
        hp: 165,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
  [
    [
      {
        value: "D",
        dmg: 179,
        hp: 182,
      },
      {
        value: "O",
        dmg: 192,
        hp: 191,
      },
      {
        value: "O",
        dmg: 191,
        hp: 191,
      },
      {
        value: "R",
        dmg: 177,
        hp: 181,
      },
      {
        value: "K",
        dmg: 190,
        hp: 190,
      },
      {
        value: "N",
        dmg: 216,
        hp: 219,
      },
      {
        value: "O",
        dmg: 231,
        hp: 230,
      },
      {
        value: "B",
        dmg: 230,
        hp: 228,
      },
      {
        value: "S",
        dmg: 146,
        hp: 146,
      },
      {
        value: "H",
        dmg: 17,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 11,
        hp: 13,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "E",
        dmg: 76,
        hp: 79,
      },
      {
        value: "Y",
        dmg: 82,
        hp: 89,
      },
      {
        value: "E",
        dmg: 80,
        hp: 83,
      },
      {
        value: "B",
        dmg: 110,
        hp: 108,
      },
      {
        value: "L",
        dmg: 160,
        hp: 164,
      },
      {
        value: "I",
        dmg: 193,
        hp: 189,
      },
      {
        value: "N",
        dmg: 187,
        hp: 186,
      },
      {
        value: "K",
        dmg: 166,
        hp: 162,
      },
      {
        value: "Y",
        dmg: 53,
        hp: 48,
      },
      {
        value: "N",
        dmg: 2,
        hp: 9,
      },
      {
        value: "G",
        dmg: 1,
        hp: 2,
      },
    ],
    [
      {
        value: "C",
        dmg: 48,
        hp: 42,
      },
      {
        value: "L",
        dmg: 45,
        hp: 45,
      },
      {
        value: "U",
        dmg: 50,
        hp: 42,
      },
      {
        value: "B",
        dmg: 47,
        hp: 46,
      },
      {
        value: "S",
        dmg: 97,
        hp: 95,
      },
      {
        value: "T",
        dmg: 90,
        hp: 84,
      },
      {
        value: "A",
        dmg: 99,
        hp: 102,
      },
      {
        value: "Y",
        dmg: 115,
        hp: 110,
      },
      {
        value: "I",
        dmg: 109,
        hp: 107,
      },
      {
        value: "N",
        dmg: 109,
        hp: 113,
      },
      {
        value: "G",
        dmg: 76,
        hp: 88,
      },
      {
        value: "S",
        dmg: 22,
        hp: 19,
      },
      {
        value: "R",
        dmg: 9,
        hp: 7,
      },
    ],
    [
      {
        value: "S",
        dmg: 123,
        hp: 124,
      },
      {
        value: "N",
        dmg: 153,
        hp: 160,
      },
      {
        value: "O",
        dmg: 159,
        hp: 156,
      },
      {
        value: "W",
        dmg: 173,
        hp: 152,
      },
      {
        value: "S",
        dmg: 297,
        hp: 299,
      },
      {
        value: "T",
        dmg: 269,
        hp: 275,
      },
      {
        value: "O",
        dmg: 271,
        hp: 273,
      },
      {
        value: "R",
        dmg: 265,
        hp: 273,
      },
      {
        value: "M",
        dmg: 307,
        hp: 297,
      },
      {
        value: "I",
        dmg: 225,
        hp: 223,
      },
      {
        value: "N",
        dmg: 218,
        hp: 225,
      },
      {
        value: "G",
        dmg: 212,
        hp: 214,
      },
      {
        value: "S",
        dmg: 126,
        hp: 123,
      },
    ],
    [
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 38,
        hp: 47,
      },
      {
        value: "W",
        dmg: 35,
        hp: 16,
      },
      {
        value: "P",
        dmg: 27,
        hp: 26,
      },
      {
        value: "H",
        dmg: 23,
        hp: 23,
      },
      {
        value: "O",
        dmg: 28,
        hp: 27,
      },
      {
        value: "M",
        dmg: 23,
        hp: 14,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "D",
        dmg: 5,
        hp: 4,
      },
    ],
    [
      {
        value: "M",
        dmg: 95,
        hp: 90,
      },
      {
        value: "E",
        dmg: 94,
        hp: 95,
      },
      {
        value: "D",
        dmg: 100,
        hp: 99,
      },
      {
        value: "I",
        dmg: 82,
        hp: 80,
      },
      {
        value: "C",
        dmg: 92,
        hp: 84,
      },
      {
        value: "A",
        dmg: 65,
        hp: 63,
      },
      {
        value: "L",
        dmg: 65,
        hp: 67,
      },
      {
        value: "N",
        dmg: 26,
        hp: 25,
      },
      {
        value: "E",
        dmg: 38,
        hp: 35,
      },
      {
        value: "S",
        dmg: 31,
        hp: 32,
      },
      {
        value: "S",
        dmg: 29,
        hp: 26,
      },
    ],
    [
      {
        value: "C",
        dmg: 175,
        hp: 181,
      },
      {
        value: "H",
        dmg: 180,
        hp: 180,
      },
      {
        value: "A",
        dmg: 204,
        hp: 205,
      },
      {
        value: "R",
        dmg: 198,
        hp: 193,
      },
      {
        value: "C",
        dmg: 212,
        hp: 218,
      },
      {
        value: "O",
        dmg: 205,
        hp: 203,
      },
      {
        value: "A",
        dmg: 201,
        hp: 201,
      },
      {
        value: "L",
        dmg: 202,
        hp: 205,
      },
      {
        value: "S",
        dmg: 157,
        hp: 158,
      },
      {
        value: "W",
        dmg: 93,
        hp: 78,
      },
      {
        value: "A",
        dmg: 80,
        hp: 81,
      },
      {
        value: "N",
        dmg: 81,
        hp: 89,
      },
      {
        value: "S",
        dmg: 56,
        hp: 51,
      },
    ],
    [
      {
        value: "S",
        dmg: 153,
        hp: 153,
      },
      {
        value: "U",
        dmg: 160,
        hp: 159,
      },
      {
        value: "P",
        dmg: 189,
        hp: 188,
      },
      {
        value: "E",
        dmg: 175,
        hp: 180,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "P",
        dmg: 159,
        hp: 158,
      },
      {
        value: "O",
        dmg: 171,
        hp: 168,
      },
      {
        value: "W",
        dmg: 180,
        hp: 175,
      },
      {
        value: "E",
        dmg: 169,
        hp: 169,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "F",
        dmg: 18,
        hp: 11,
      },
      {
        value: "L",
        dmg: 4,
        hp: 14,
      },
    ],
  ],
  [
    [
      {
        value: "D",
        dmg: 179,
        hp: 182,
      },
      {
        value: "O",
        dmg: 192,
        hp: 191,
      },
      {
        value: "O",
        dmg: 191,
        hp: 191,
      },
      {
        value: "R",
        dmg: 177,
        hp: 181,
      },
      {
        value: "K",
        dmg: 190,
        hp: 190,
      },
      {
        value: "N",
        dmg: 216,
        hp: 219,
      },
      {
        value: "O",
        dmg: 231,
        hp: 230,
      },
      {
        value: "B",
        dmg: 230,
        hp: 228,
      },
      {
        value: "S",
        dmg: 146,
        hp: 146,
      },
      {
        value: "H",
        dmg: 21,
        hp: 19,
      },
      {
        value: "E",
        dmg: 21,
        hp: 18,
      },
      {
        value: "L",
        dmg: 8,
        hp: 18,
      },
      {
        value: "Y",
        dmg: 2,
        hp: 4,
      },
      {
        value: "W",
        dmg: 18,
        hp: 16,
      },
    ],
    [
      {
        value: "E",
        dmg: 76,
        hp: 79,
      },
      {
        value: "Y",
        dmg: 82,
        hp: 89,
      },
      {
        value: "E",
        dmg: 80,
        hp: 83,
      },
      {
        value: "B",
        dmg: 110,
        hp: 108,
      },
      {
        value: "L",
        dmg: 135,
        hp: 139,
      },
      {
        value: "I",
        dmg: 152,
        hp: 148,
      },
      {
        value: "N",
        dmg: 146,
        hp: 145,
      },
      {
        value: "K",
        dmg: 121,
        hp: 117,
      },
      {
        value: "N",
        dmg: 2,
        hp: 9,
      },
      {
        value: "G",
        dmg: 1,
        hp: 2,
      },
    ],
    [
      {
        value: "S",
        dmg: 123,
        hp: 124,
      },
      {
        value: "N",
        dmg: 153,
        hp: 160,
      },
      {
        value: "O",
        dmg: 159,
        hp: 156,
      },
      {
        value: "W",
        dmg: 173,
        hp: 152,
      },
      {
        value: "S",
        dmg: 297,
        hp: 299,
      },
      {
        value: "T",
        dmg: 269,
        hp: 275,
      },
      {
        value: "O",
        dmg: 271,
        hp: 273,
      },
      {
        value: "R",
        dmg: 265,
        hp: 273,
      },
      {
        value: "M",
        dmg: 307,
        hp: 297,
      },
      {
        value: "I",
        dmg: 225,
        hp: 223,
      },
      {
        value: "N",
        dmg: 218,
        hp: 225,
      },
      {
        value: "G",
        dmg: 212,
        hp: 214,
      },
      {
        value: "S",
        dmg: 130,
        hp: 127,
      },
      {
        value: "H",
        dmg: 7,
        hp: 6,
      },
    ],
    [
      {
        value: "P",
        dmg: 50,
        hp: 50,
      },
      {
        value: "A",
        dmg: 59,
        hp: 62,
      },
      {
        value: "I",
        dmg: 62,
        hp: 62,
      },
      {
        value: "N",
        dmg: 57,
        hp: 63,
      },
      {
        value: "T",
        dmg: 38,
        hp: 47,
      },
      {
        value: "W",
        dmg: 35,
        hp: 16,
      },
      {
        value: "P",
        dmg: 27,
        hp: 26,
      },
      {
        value: "H",
        dmg: 23,
        hp: 23,
      },
      {
        value: "O",
        dmg: 28,
        hp: 27,
      },
      {
        value: "M",
        dmg: 23,
        hp: 14,
      },
      {
        value: "F",
        dmg: 9,
        hp: 1,
      },
      {
        value: "D",
        dmg: 5,
        hp: 4,
      },
    ],
    [
      {
        value: "M",
        dmg: 159,
        hp: 154,
      },
      {
        value: "E",
        dmg: 158,
        hp: 159,
      },
      {
        value: "D",
        dmg: 164,
        hp: 163,
      },
      {
        value: "I",
        dmg: 146,
        hp: 144,
      },
      {
        value: "C",
        dmg: 172,
        hp: 164,
      },
      {
        value: "A",
        dmg: 154,
        hp: 152,
      },
      {
        value: "L",
        dmg: 154,
        hp: 156,
      },
      {
        value: "S",
        dmg: 91,
        hp: 92,
      },
      {
        value: "S",
        dmg: 4,
        hp: 1,
      },
      {
        value: "N",
        dmg: 2,
        hp: 2,
      },
      {
        value: "N",
        dmg: 10,
        hp: 9,
      },
      {
        value: "E",
        dmg: 9,
        hp: 6,
      },
    ],
    [
      {
        value: "C",
        dmg: 175,
        hp: 181,
      },
      {
        value: "H",
        dmg: 180,
        hp: 180,
      },
      {
        value: "A",
        dmg: 204,
        hp: 205,
      },
      {
        value: "R",
        dmg: 198,
        hp: 193,
      },
      {
        value: "C",
        dmg: 212,
        hp: 218,
      },
      {
        value: "O",
        dmg: 205,
        hp: 203,
      },
      {
        value: "A",
        dmg: 201,
        hp: 201,
      },
      {
        value: "L",
        dmg: 202,
        hp: 205,
      },
      {
        value: "S",
        dmg: 157,
        hp: 158,
      },
      {
        value: "W",
        dmg: 93,
        hp: 78,
      },
      {
        value: "A",
        dmg: 80,
        hp: 81,
      },
      {
        value: "N",
        dmg: 81,
        hp: 89,
      },
      {
        value: "S",
        dmg: 60,
        hp: 55,
      },
      {
        value: "O",
        dmg: 8,
        hp: 5,
      },
    ],
    [
      {
        value: "S",
        dmg: 153,
        hp: 153,
      },
      {
        value: "U",
        dmg: 160,
        hp: 159,
      },
      {
        value: "P",
        dmg: 189,
        hp: 188,
      },
      {
        value: "E",
        dmg: 175,
        hp: 180,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "P",
        dmg: 159,
        hp: 158,
      },
      {
        value: "O",
        dmg: 171,
        hp: 168,
      },
      {
        value: "W",
        dmg: 180,
        hp: 175,
      },
      {
        value: "E",
        dmg: 169,
        hp: 169,
      },
      {
        value: "R",
        dmg: 163,
        hp: 161,
      },
      {
        value: "F",
        dmg: 18,
        hp: 11,
      },
      {
        value: "L",
        dmg: 4,
        hp: 14,
      },
    ],
    [
      {
        value: "S",
        dmg: 275,
        hp: 272,
      },
      {
        value: "N",
        dmg: 302,
        hp: 305,
      },
      {
        value: "O",
        dmg: 307,
        hp: 306,
      },
      {
        value: "R",
        dmg: 304,
        hp: 303,
      },
      {
        value: "K",
        dmg: 289,
        hp: 290,
      },
      {
        value: "E",
        dmg: 277,
        hp: 276,
      },
      {
        value: "L",
        dmg: 333,
        hp: 333,
      },
      {
        value: "I",
        dmg: 308,
        hp: 306,
      },
      {
        value: "N",
        dmg: 302,
        hp: 302,
      },
      {
        value: "G",
        dmg: 289,
        hp: 295,
      },
      {
        value: "S",
        dmg: 168,
        hp: 165,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
  [
    [
      {
        value: "T",
        dmg: 69,
        hp: 67,
      },
      {
        value: "A",
        dmg: 78,
        hp: 77,
      },
      {
        value: "N",
        dmg: 72,
        hp: 75,
      },
      {
        value: "D",
        dmg: 237,
        hp: 240,
      },
      {
        value: "O",
        dmg: 241,
        hp: 240,
      },
      {
        value: "O",
        dmg: 240,
        hp: 240,
      },
      {
        value: "R",
        dmg: 226,
        hp: 230,
      },
      {
        value: "K",
        dmg: 190,
        hp: 190,
      },
      {
        value: "N",
        dmg: 216,
        hp: 219,
      },
      {
        value: "O",
        dmg: 231,
        hp: 230,
      },
      {
        value: "B",
        dmg: 230,
        hp: 228,
      },
      {
        value: "S",
        dmg: 146,
        hp: 146,
      },
      {
        value: "H",
        dmg: 17,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 11,
        hp: 13,
      },
    ],
    [
      {
        value: "U",
        dmg: 10,
        hp: 9,
      },
      {
        value: "S",
        dmg: 7,
        hp: 7,
      },
      {
        value: "P",
        dmg: 35,
        hp: 34,
      },
      {
        value: "E",
        dmg: 34,
        hp: 39,
      },
      {
        value: "R",
        dmg: 38,
        hp: 36,
      },
      {
        value: "P",
        dmg: 123,
        hp: 122,
      },
      {
        value: "O",
        dmg: 135,
        hp: 132,
      },
      {
        value: "W",
        dmg: 144,
        hp: 139,
      },
      {
        value: "E",
        dmg: 133,
        hp: 133,
      },
      {
        value: "R",
        dmg: 127,
        hp: 125,
      },
      {
        value: "F",
        dmg: 82,
        hp: 75,
      },
      {
        value: "U",
        dmg: 72,
        hp: 69,
      },
      {
        value: "L",
        dmg: 68,
        hp: 78,
      },
    ],
    [
      {
        value: "S",
        dmg: 275,
        hp: 272,
      },
      {
        value: "N",
        dmg: 302,
        hp: 305,
      },
      {
        value: "O",
        dmg: 307,
        hp: 306,
      },
      {
        value: "R",
        dmg: 304,
        hp: 303,
      },
      {
        value: "K",
        dmg: 289,
        hp: 290,
      },
      {
        value: "E",
        dmg: 277,
        hp: 276,
      },
      {
        value: "L",
        dmg: 333,
        hp: 333,
      },
      {
        value: "I",
        dmg: 308,
        hp: 306,
      },
      {
        value: "N",
        dmg: 302,
        hp: 302,
      },
      {
        value: "G",
        dmg: 289,
        hp: 295,
      },
      {
        value: "S",
        dmg: 168,
        hp: 165,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
  [
    [
      {
        value: "T",
        dmg: 69,
        hp: 67,
      },
      {
        value: "A",
        dmg: 78,
        hp: 77,
      },
      {
        value: "N",
        dmg: 72,
        hp: 75,
      },
      {
        value: "D",
        dmg: 237,
        hp: 240,
      },
      {
        value: "O",
        dmg: 241,
        hp: 240,
      },
      {
        value: "O",
        dmg: 240,
        hp: 240,
      },
      {
        value: "R",
        dmg: 226,
        hp: 230,
      },
      {
        value: "K",
        dmg: 190,
        hp: 190,
      },
      {
        value: "N",
        dmg: 216,
        hp: 219,
      },
      {
        value: "O",
        dmg: 231,
        hp: 230,
      },
      {
        value: "B",
        dmg: 230,
        hp: 228,
      },
      {
        value: "S",
        dmg: 146,
        hp: 146,
      },
      {
        value: "H",
        dmg: 17,
        hp: 15,
      },
      {
        value: "Y",
        dmg: 11,
        hp: 13,
      },
    ],
    [
      {
        value: "S",
        dmg: 322,
        hp: 322,
      },
      {
        value: "U",
        dmg: 329,
        hp: 328,
      },
      {
        value: "P",
        dmg: 358,
        hp: 357,
      },
      {
        value: "E",
        dmg: 344,
        hp: 349,
      },
      {
        value: "R",
        dmg: 332,
        hp: 330,
      },
      {
        value: "P",
        dmg: 392,
        hp: 391,
      },
      {
        value: "O",
        dmg: 404,
        hp: 401,
      },
      {
        value: "W",
        dmg: 413,
        hp: 408,
      },
      {
        value: "E",
        dmg: 402,
        hp: 402,
      },
      {
        value: "R",
        dmg: 396,
        hp: 394,
      },
      {
        value: "F",
        dmg: 251,
        hp: 244,
      },
      {
        value: "U",
        dmg: 241,
        hp: 238,
      },
      {
        value: "L",
        dmg: 237,
        hp: 247,
      },
    ],
    [
      {
        value: "S",
        dmg: 275,
        hp: 272,
      },
      {
        value: "N",
        dmg: 302,
        hp: 305,
      },
      {
        value: "O",
        dmg: 307,
        hp: 306,
      },
      {
        value: "R",
        dmg: 304,
        hp: 303,
      },
      {
        value: "K",
        dmg: 289,
        hp: 290,
      },
      {
        value: "E",
        dmg: 277,
        hp: 276,
      },
      {
        value: "L",
        dmg: 333,
        hp: 333,
      },
      {
        value: "I",
        dmg: 308,
        hp: 306,
      },
      {
        value: "N",
        dmg: 302,
        hp: 302,
      },
      {
        value: "G",
        dmg: 289,
        hp: 295,
      },
      {
        value: "S",
        dmg: 168,
        hp: 165,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
  [
    [
      {
        value: "A",
        dmg: 205,
        hp: 206,
      },
      {
        value: "P",
        dmg: 214,
        hp: 210,
      },
      {
        value: "P",
        dmg: 313,
        hp: 309,
      },
      {
        value: "L",
        dmg: 300,
        hp: 305,
      },
      {
        value: "I",
        dmg: 398,
        hp: 397,
      },
      {
        value: "C",
        dmg: 391,
        hp: 388,
      },
      {
        value: "A",
        dmg: 392,
        hp: 391,
      },
      {
        value: "T",
        dmg: 376,
        hp: 382,
      },
      {
        value: "I",
        dmg: 388,
        hp: 389,
      },
      {
        value: "O",
        dmg: 398,
        hp: 399,
      },
      {
        value: "N",
        dmg: 393,
        hp: 401,
      },
      {
        value: "S",
        dmg: 245,
        hp: 244,
      },
      {
        value: "S",
        dmg: 8,
        hp: 4,
      },
      {
        value: "S",
        dmg: 5,
        hp: 2,
      },
      {
        value: "S",
        dmg: 7,
        hp: 4,
      },
    ],
    [
      {
        value: "S",
        dmg: 322,
        hp: 322,
      },
      {
        value: "U",
        dmg: 329,
        hp: 328,
      },
      {
        value: "P",
        dmg: 358,
        hp: 357,
      },
      {
        value: "E",
        dmg: 344,
        hp: 349,
      },
      {
        value: "R",
        dmg: 332,
        hp: 330,
      },
      {
        value: "P",
        dmg: 392,
        hp: 391,
      },
      {
        value: "O",
        dmg: 404,
        hp: 401,
      },
      {
        value: "W",
        dmg: 413,
        hp: 408,
      },
      {
        value: "E",
        dmg: 402,
        hp: 402,
      },
      {
        value: "R",
        dmg: 396,
        hp: 394,
      },
      {
        value: "F",
        dmg: 251,
        hp: 244,
      },
      {
        value: "U",
        dmg: 241,
        hp: 238,
      },
      {
        value: "L",
        dmg: 237,
        hp: 247,
      },
    ],
    [
      {
        value: "S",
        dmg: 275,
        hp: 272,
      },
      {
        value: "N",
        dmg: 302,
        hp: 305,
      },
      {
        value: "O",
        dmg: 307,
        hp: 306,
      },
      {
        value: "R",
        dmg: 304,
        hp: 303,
      },
      {
        value: "K",
        dmg: 289,
        hp: 290,
      },
      {
        value: "E",
        dmg: 277,
        hp: 276,
      },
      {
        value: "L",
        dmg: 333,
        hp: 333,
      },
      {
        value: "I",
        dmg: 308,
        hp: 306,
      },
      {
        value: "N",
        dmg: 302,
        hp: 302,
      },
      {
        value: "G",
        dmg: 289,
        hp: 295,
      },
      {
        value: "S",
        dmg: 168,
        hp: 165,
      },
      {
        value: "X",
        dmg: 12,
        hp: 6,
      },
    ],
  ],
];

export default saved;
