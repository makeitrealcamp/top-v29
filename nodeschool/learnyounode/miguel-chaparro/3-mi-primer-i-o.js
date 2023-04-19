let fs = require('fs')
let buffer = fs.readFileSync(process.argv[2]);
let text = buffer.toString();
let ftext = text.split('\n');
console.log(ftext.length - 1)