const lines = ["01/27 24:30"];

// MM, dd, hh, mm はそれぞれ月、日、時、分
const dayAndTime = (lines[0]);
const MM = dayAndTime.slice(0, 2);
const checkDd = dayAndTime.slice(3, 5);
const checkHh = dayAndTime.slice(6, 8);
const mm = dayAndTime.slice(9, 11);

// チェックが必要なdayとhourをチェックする
const getDay = (checkDd: string): string => {
  return (checkDd ? "28" : "27")   
}
const getHour = (checkHh: string): string => {
  return (checkHh ? '00' : '24');
}
// 最終的に条件フィルターを通過した値を出力する
const dd = getDay(checkDd);
const hh = getHour(checkHh);
console.log(MM + "/" + dd + " " + hh + ":" + mm);
