lines[0] = ["PAIZA"];

const st = lines[0];

  const checkP = (char) => {
    if (char === "P") {
      return "P";
    }
    return "";
  };

  const checkA = (char) => {
    if (char === "A") {
      return "4";
    }
    return "";
  };

  const checkI = (char) => {
    if (char === "I") {
      return "1";
    }
    return "";
  };

  const checkZ = (char) => {
    if (char === "Z") {
      return "2";
    }
    return "";
  };

  const checkY = (char) => {
    if (char === "Y") {
      return "Y";
    }
    return "";
  };

  let result = "";
    for (let i = 0; i < st.length; i++) {
      const char = st.charAt(i);
      result += checkP(char) + checkA(char) + checkI(char) + checkZ(char) + checkY(char);
    }

    console.log(result);
