// ボンバーマンの爆風を作る

const [H, W] = lines[0].split(" ").map(Number);

// フィールドの状態を読み取り、爆弾の位置を記録する
const field = [];
const bombs = new Set();
for (let i = 1; i <= H; i++) {
  const row = lines[i];
  field.push(row);
  for (let j = 0; j < W; j++) {
    if (row[j] === "#") {
      bombs.add(`${i},${j}`);
    }
  }
}

// 爆風が広がるマス目の数をカウントする
let count = bombs.size;  // 「3」爆弾がある場所はすでにカウントされているため、カウント数を初期値とする

for (let i = 0; i < H; i++) {
  if (field[i].indexOf("#") !== -1) {
    count += W - 1;  // 爆弾がある場所を除いた列の数
  }
}
for (let j = 0; j < W; j++) {
  let hasBomb = false;
  let countInColumn = 0;
  
  for (let i = 0; i < H; i++) {
    if (field[i][j] === "#") {
      hasBomb = true;
      countInColumn += 1;
    }
  }
  if (hasBomb) {
    count += countInColumn - 1;  // 爆弾がある場所を除いた行の数
  }
}

// 結果を出力する
console.log(count);
