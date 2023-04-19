const fs = require('fs'); // commonJS module

const path = process.argv[2];
const contents = fs.readFileSync(path);
const lines = contents.toString().split('\n');

console.log(lines.length - 1);
