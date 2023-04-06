// 入力された値 lines に" | "を追加して出力する

import React from "react";

export function OutputNum() {
  const lines: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const num = lines.map((outputNum: number, index: number) => {
    if (outputNum === 9) {
      return <span key={index}>{outputNum}</span>;
    } else {
      return <span key={index}>{outputNum} | </span>;
    }
  });
  return <div>{num}</div>;
}
