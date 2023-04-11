// 入力を受け取る
const inputSt: string = "PAIZA";

// 要件に合わせて文字を置き換える
const leetChange: { [key: string]: string } = {
  'A': '4',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'S': '5',
  'Z': '2'
};

// 文字を入れる箱を作る
let result: string = '';

// 入力文字列を1文字ずつ処理する
for (let i = 0; i < inputSt.length; i++) {
  // charAt() で指定した引数の文字を左から一つずつ取得
  const char: string = inputSt.charAt(i);
  if (leetChange[char]) {
    // leetChangeの条件に一致したらresultに一つずつ格納していく
    result += leetChange[char];
  } else {
    // leetChangeの条件に一致しなかったら元々の文字列をそのまま代入
    result += char;
  }
}

console.log(result);
