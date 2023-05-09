const fs = require('fs');
const path = process.argv[2];
const contenido = fs.readFileSync(path);
const parrafos = contenido.toString().split('\n');
console.log(parrafos.length - 1);
