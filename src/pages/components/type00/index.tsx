// 入力された値 lines に" | "を追加して出力するReactコンポーネント

import React from "react";

type OutputNumProps = {
  lines: number[];
};

export const OutputNum: React.FC<OutputNumProps> = ({ lines }) => {
  const num = lines.map((outputNum: number, index: number) => {
    if (outputNum === 9) {
      return <span key={index}>{outputNum}</span>;
    } else {
      return <span key={index}>{outputNum} | </span>;
    }
  });
  return <div>{num}</div>;
};

