const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const num = parseInt(input);

console.log(num);

if (num < 0) {
  console.log("minus");
}
