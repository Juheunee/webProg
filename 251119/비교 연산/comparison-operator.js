const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

// 1. a가 b보다 같거나 큰지
console.log(a >= b ? 1 : 0);

// 2. a가 b보다 큰지
console.log(a > b ? 1 : 0);

// 3. b가 a보다 같거나 큰지
console.log(b >= a ? 1 : 0);

// 4. b가 a보다 큰지
console.log(b > a ? 1 : 0);

// 5. a와 b가 같은지
console.log(a == b ? 1 : 0);

// 6. a와 b가 다른지
console.log(a != b ? 1 : 0);
