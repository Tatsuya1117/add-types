// 車の渋滞を計算する
lines = [ '6 12', '8', '6', '36', '4' ];

const [car, traffic] = lines[0].split(" ").map(Number); // 6, 12

const distances = lines.slice(1).map(Number); // [8, 6, 36, 4]

const trafficJam = (traffic, distances) => {
  let jam = 0;

  for (const distance of distances) {
    if (traffic >= distance) {
      jam += distance;
    } else {
      continue;
    }
  }
  return jam; // 18
};

const totalJamDistance = trafficJam(traffic, distances);
console.log(totalJamDistance);
