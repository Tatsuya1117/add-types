// 入力は以下の内容で与えられる
// lines = [
//   "2 3",
//   "0 255 255",
//   "0 255 255",
//   "0 0 0",
//   "255 255 255"
// ];

// 升目を求める
const height = parseInt(lines[0][0]); // 2
const width = parseInt(lines[0][2]); // 3
const block = height * width;

const firstBoard = lines.slice(1, 1 + height).map(line => line.split(' ').map(Number));
const secondBoard = lines.slice(1 + height).map(line => line.split(' ').map(Number));

// それぞれのマスを重ねて、重なった部分を算出する
const joinBoard = (board1, board2) => {
  const result = [];
  for (let i = 0; i < 2 * height - 1; i++) {
    const row = [];
    for (let j = 0; j < 2 * width - 1; j++) {
      if (i % 2 === 0 && j % 2 === 0) {
        row.push(board1[Math.floor(i / 2)][Math.floor(j / 2)]);
      } else if (i % 2 === 1 && j % 2 === 1) {
        row.push(Math.floor((board1[Math.floor((i - 1) / 2)][Math.floor((j - 1) / 2)] + board2[Math.floor((i - 1) / 2)][Math.floor((j - 1) / 2)]) / 2));
      } else {
        row.push(127);
      }
    }
    result.push(row);
  }
  return result;
};

const answer = joinBoard(firstBoard, secondBoard);
console.log(answer);
