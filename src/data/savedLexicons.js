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
  ],
];

export default saved;
