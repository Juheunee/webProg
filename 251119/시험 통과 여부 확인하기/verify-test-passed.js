const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const a = Number(input);

if (a >= 80) {
    console.log("pass");
} else {
    console.log((80 - a) + " more score");
}
