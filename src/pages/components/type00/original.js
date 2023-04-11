// 元々のコード

const lines = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] 
  const num = lines;
  for(let i = 0; i < lines.length; i++) {
    const outputNum = lines[i];
    if(outputNum == 9 ) {
      process.stdout.write(outputNum);
    } else {
      process.stdout.write(outputNum + " | ");
    }
  }
