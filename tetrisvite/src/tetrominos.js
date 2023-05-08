export const TETROMINOS = {
  0: { shape: [[0]], color: "bg-black", border: "border-gray-800", css: "0, 0, 0", },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "bg-cyan-500",
    border: "border-cyan-700",
    css: "80, 227, 230",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "bg-blue-500",
    border: "border-blue-700",
    css: "36, 95, 223",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: 'bg-orange-500',
    border: "border-orange-700",
    css: '223, 173, 36',
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "bg-yellow-500",
    border: "border-yellow-700",
    css: '223, 217, 36',
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "bg-green-500",
    border: "border-green-700",
    css: '48, 211, 56',
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "bg-purple-500",
    border: "border-purple-700",
    css: '132, 61, 198',
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "bg-red-500",
    border: "border-red-700",
    css: '227, 78, 78',
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZ";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
