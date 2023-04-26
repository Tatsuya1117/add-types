const input = require("fs").readFileSync("/dev/stdin", "utf8");
const lines = input.trim().split("\n");

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
let count = bombs.size;  // 爆弾がある場所はすでにカウントされているため、カウント数を初期値とする

// 爆風が広がる範囲を二次元配列で管理する
const fieldExplosion = Array.from({ length: H }, () => new Array(W).fill(false));
for (const bomb of bombs) {
  const [i, j] = bomb.split(",").map(Number);
  for (let k = 0; k < H; k++) {
    fieldExplosion[k][j] = true;
  }
  for (let k = 0; k < W; k++) {
    fieldExplosion[i][k] = true;
  }
}

// 同じ行または列に複数の爆弾がある場合、重複する爆風が広がる範囲を除く除外の式
for (const bomb of bombs) {
  const [i, j] = bomb.split(",").map(Number);
  let exclude = false;
  for (let k = 0; k < H; k++) {
    if (k === i) {
      continue;
    }
    if (fieldExplosion[k][j]) {
      exclude = true;
      break;
    }
  }
  if (exclude) {
    count -= W - 1
  }

exclude = false;
  for (let k = 0; k < W; k++) {
  if (k === j) {
  continue;
}
  if (fieldExplosion[i][k]) {
    exclude = true;
    break;
  }
}
if (exclude) {
    count -= H - 1;
  }
}

// 結果を出力する
console.log(count);
