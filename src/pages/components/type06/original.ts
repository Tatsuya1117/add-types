// 所持金額、利益、損失を計算する

const lines_01: number[] = [180, 150, 100];

const possession: number = parseInt(lines[0]);
const profit: number = parseInt(lines[1]);
const loss: number = parseInt(lines[2]);
  
const stockTrading = (possession: number, profit: number, loss: number) => {
  const sum: number = possession + profit - loss;
  console.log(sum);
}

stockTrading(possession, profit, loss);
