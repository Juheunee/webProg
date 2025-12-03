const fs = require('fs');
const temp = Number(fs.readFileSync(0, 'utf8').trim());

// 조건 검사
if (temp < 0) {
    console.log("ice");
} else if (temp >= 100) {
    console.log("vapor");
} else {
    console.log("water");
}
