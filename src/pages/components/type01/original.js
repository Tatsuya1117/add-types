// 入力された日時を分解する
const lines = ["01/27 24:30"];

// MM, dd, hh, mm はそれぞれ月、日、時、分を定義
const dayTime = (lines[0]);
const MM = dayTime.slice(0, 2);
const dd = dayTime.slice(3, 5);
const hh = dayTime.slice(6, 8);
const mm = dayTime.slice(9, 11);

// 月をチェックする関数
const checkMonth = (MM) => {
  if (MM >= 1 && MM <= 12) {
    return MM;
  } else {
    console.log("Monthは1〜12を入力してください。");
    return null;
  }
}

// 日をチェックする関数
const checkDay = (dd) => {
  if (dd >= 1 && dd <= 31) {
    return dd;
  } else {
    console.log("Dayは1〜31を入力してください。");
    return null;
  }
}

// 時をチェックする関数
const checkHour = (hh) => {
  if (hh >= 0 && hh <= 23) {
    return hh;
  } else if (hh == 24) {
    return 0;
  } else {
    console.log("Hourは0〜24を入力してください。");
    return null;
  }
}

// 分をチェックする関数
const checkMinutes = (mm) => {
  if (mm >= 0 && mm <= 60) {
    return mm;
  } else {
    console.log("Minutesは0〜60を入力してください。");
    return null;
  }
}

// 入力された日時をチェックする
const resultMonth = checkMonth(MM);
let resultDay = checkDay(dd);
const resultHour = checkHour(hh);
const resultMinutes = checkMinutes(mm);

// 時間が24の場合、日に1を追加することで00時を実現する
if (resultHour == 24) {
  resultDay += 1;
}

// 求められる形式で出力を整形 MM/dd hh:mm
const result = resultMonth + "/" + resultDay + " " + resultHour + ":" + resultMinutes;
// 出力する
console.log(result);