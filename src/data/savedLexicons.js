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
        value: "A",
        dmg: 131,
        hp: 132,
      },
      {
        value: "P",
        dmg: 140,
        hp: 136,
      },
      {
        value: "P",
        dmg: 248,
        hp: 244,
      },
      {
        value: "L",
        dmg: 235,
        hp: 240,
      },
      {
        value: "I",
        dmg: 233,
        hp: 232,
      },
      {
        value: "C",
        dmg: 277,
        hp: 274,
      },
      {
        value: "A",
        dmg: 278,
        hp: 277,
      },
      {
        value: "T",
        dmg: 262,
        hp: 268,
      },
      {
        value: "I",
        dmg: 258,
        hp: 259,
      },
      {
        value: "O",
        dmg: 259,
        hp: 260,
      },
      {
        value: "N",
        dmg: 254,
        hp: 262,
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
        value: "A",
        dmg: 275,
        hp: 276,
      },
      {
        value: "P",
        dmg: 284,
        hp: 280,
      },
      {
        value: "P",
        dmg: 492,
        hp: 488,
      },
      {
        value: "L",
        dmg: 479,
        hp: 484,
      },
      {
        value: "I",
        dmg: 477,
        hp: 476,
      },
      {
        value: "C",
        dmg: 570,
        hp: 567,
      },
      {
        value: "A",
        dmg: 571,
        hp: 570,
      },
      {
        value: "T",
        dmg: 555,
        hp: 561,
      },
      {
        value: "I",
        dmg: 567,
        hp: 568,
      },
      {
        value: "O",
        dmg: 577,
        hp: 578,
      },
      {
        value: "N",
        dmg: 572,
        hp: 580,
      },
      {
        value: "S",
        dmg: 320,
        hp: 319,
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
        value: "I",
        dmg: 3,
        hp: 1,
      },
      {
        value: "A",
        dmg: 275,
        hp: 276,
      },
      {
        value: "P",
        dmg: 284,
        hp: 280,
      },
      {
        value: "P",
        dmg: 492,
        hp: 488,
      },
      {
        value: "L",
        dmg: 479,
        hp: 484,
      },
      {
        value: "I",
        dmg: 477,
        hp: 476,
      },
      {
        value: "C",
        dmg: 570,
        hp: 567,
      },
      {
        value: "A",
        dmg: 571,
        hp: 570,
      },
      {
        value: "T",
        dmg: 555,
        hp: 561,
      },
      {
        value: "I",
        dmg: 567,
        hp: 568,
      },
      {
        value: "O",
        dmg: 577,
        hp: 578,
      },
      {
        value: "N",
        dmg: 572,
        hp: 580,
      },
      {
        value: "S",
        dmg: 320,
        hp: 319,
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
        value: "M",
        dmg: 14,
        hp: 6,
      },
      {
        value: "I",
        dmg: 7,
        hp: 5,
      },
      {
        value: "A",
        dmg: 275,
        hp: 276,
      },
      {
        value: "P",
        dmg: 284,
        hp: 280,
      },
      {
        value: "P",
        dmg: 492,
        hp: 488,
      },
      {
        value: "L",
        dmg: 479,
        hp: 484,
      },
      {
        value: "I",
        dmg: 477,
        hp: 476,
      },
      {
        value: "C",
        dmg: 570,
        hp: 567,
      },
      {
        value: "A",
        dmg: 571,
        hp: 570,
      },
      {
        value: "T",
        dmg: 555,
        hp: 561,
      },
      {
        value: "I",
        dmg: 567,
        hp: 568,
      },
      {
        value: "O",
        dmg: 577,
        hp: 578,
      },
      {
        value: "N",
        dmg: 572,
        hp: 580,
      },
      {
        value: "S",
        dmg: 320,
        hp: 319,
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
        value: "M",
        dmg: 444,
        hp: 436,
      },
      {
        value: "I",
        dmg: 441,
        hp: 439,
      },
      {
        value: "S",
        dmg: 445,
        hp: 444,
      },
      {
        value: "A",
        dmg: 705,
        hp: 706,
      },
      {
        value: "P",
        dmg: 714,
        hp: 710,
      },
      {
        value: "P",
        dmg: 913,
        hp: 909,
      },
      {
        value: "L",
        dmg: 900,
        hp: 905,
      },
      {
        value: "I",
        dmg: 898,
        hp: 897,
      },
      {
        value: "C",
        dmg: 991,
        hp: 988,
      },
      {
        value: "A",
        dmg: 992,
        hp: 991,
      },
      {
        value: "T",
        dmg: 976,
        hp: 982,
      },
      {
        value: "I",
        dmg: 988,
        hp: 989,
      },
      {
        value: "O",
        dmg: 998,
        hp: 999,
      },
      {
        value: "N",
        dmg: 993,
        hp: 1001,
      },
      {
        value: "S",
        dmg: 545,
        hp: 544,
      },
    ],
  ],
  [
    [
      {
        value: "M",
        dmg: 444,
        hp: 436,
      },
      {
        value: "I",
        dmg: 441,
        hp: 439,
      },
      {
        value: "S",
        dmg: 445,
        hp: 444,
      },
      {
        value: "A",
        dmg: 705,
        hp: 706,
      },
      {
        value: "P",
        dmg: 714,
        hp: 710,
      },
      {
        value: "P",
        dmg: 913,
        hp: 909,
      },
      {
        value: "L",
        dmg: 900,
        hp: 905,
      },
      {
        value: "I",
        dmg: 898,
        hp: 897,
      },
      {
        value: "C",
        dmg: 991,
        hp: 988,
      },
      {
        value: "A",
        dmg: 992,
        hp: 991,
      },
      {
        value: "T",
        dmg: 976,
        hp: 982,
      },
      {
        value: "I",
        dmg: 988,
        hp: 989,
      },
      {
        value: "O",
        dmg: 998,
        hp: 999,
      },
      {
        value: "N",
        dmg: 993,
        hp: 1001,
      },
      {
        value: "S",
        dmg: 545,
        hp: 544,
      },
    ],
  ],
  [
    [
      {
        value: "M",
        dmg: 444,
        hp: 436,
      },
      {
        value: "I",
        dmg: 444,
        hp: 443,
      },
      {
        value: "S",
        dmg: 445,
        hp: 444,
      },
      {
        value: "A",
        dmg: 705,
        hp: 706,
      },
      {
        value: "P",
        dmg: 714,
        hp: 710,
      },
      {
        value: "P",
        dmg: 913,
        hp: 909,
      },
      {
        value: "L",
        dmg: 900,
        hp: 905,
      },
      {
        value: "I",
        dmg: 898,
        hp: 897,
      },
      {
        value: "C",
        dmg: 991,
        hp: 988,
      },
      {
        value: "A",
        dmg: 992,
        hp: 991,
      },
      {
        value: "T",
        dmg: 976,
        hp: 982,
      },
      {
        value: "I",
        dmg: 988,
        hp: 989,
      },
      {
        value: "O",
        dmg: 998,
        hp: 999,
      },
      {
        value: "N",
        dmg: 993,
        hp: 1001,
      },
      {
        value: "S",
        dmg: 545,
        hp: 544,
      },
    ],
  ],
];

export default saved;
