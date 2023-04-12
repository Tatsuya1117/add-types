lines = [ '5 10', '5', '6', '25', '4' ];

const [car, traffic] = lines[0].split(" ").map(Number); // 5, 10

const distances = lines.slice(1).map(Number); // [5, 6, 25, 4]

const trafficJam = (traffic, distances) => {
  let jam = 0;

  for (const distance of distances) {
    if (traffic >= distance) {
      jam += distance;
    } else {
      continue;
    }
  }
  return jam;
};

const totalJamDistance = trafficJam(traffic, distances);
console.log(totalJamDistance);
