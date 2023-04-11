lines = ["PAIZA"];

// 入力を受け取る  
const inputSt = lines[0];
// 要件に合わせて文字を置き換える
const leetChange = {
  'A': '4',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'S': '5',
  'Z': '2'
};
// 文字を入れる箱を作る
let result = '';
// 
for (let i = 0; i < inputSt.length; i++) {
  // charAt() で指定した引数の文字を左から一つずつ取得
  const char = inputSt.charAt(i);
  if (leetChange[char]) {
    // leetChangeの条件に一致したらresultに一つずつ格納していく
    result += leetChange[char];
  } else {
    // leetChangeの条件に一致しなかったら元々の文字列をそのまま代入
    result += char;
  }
}
console.log(result);



// 以下はテストを通過できなかった。
// const st = lines[0];

//   const checkP = (char) => {
//     if (char === "P") {
//       return "P";
//     }
//     return "";
//   };

//   const checkA = (char) => {
//     if (char === "A") {
//       return "4";
//     }
//     return "";
//   };

//   const checkI = (char) => {
//     if (char === "I") {
//       return "1";
//     }
//     return "";
//   };

//   const checkZ = (char) => {
//     if (char === "Z") {
//       return "2";
//     }
//     return "";
//   };

//   const checkY = (char) => {
//     if (char === "Y") {
//       return "Y";
//     }
//     return "";
//   };

//   let result = "";
//     for (let i = 0; i < st.length; i++) {
//       const char = st.charAt(i);
//       result += checkP(char) + checkA(char) + checkI(char) + checkZ(char) + checkY(char);
//     }

//     console.log(result);
