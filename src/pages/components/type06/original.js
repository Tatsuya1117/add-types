// 所持金額、利益、損失を計算する

const lines = [180, 150, 100];

const possession = parseInt(lines[0]);
const profit = parseInt(lines[1]);
const loss = parseInt(lines[2]);
  
const stockTrading = (possession, profit, loss) => {
  const sum = possession + profit - loss;
  console.log(sum);
}

stockTrading(possession, profit, loss);
