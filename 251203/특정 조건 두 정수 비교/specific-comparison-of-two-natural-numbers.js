const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let a = input[0];
let b = input[1];

let first = (a < b) ? 1 : 0;
let second = (a === b) ? 1 : 0;

console.log(first + " " + second);
