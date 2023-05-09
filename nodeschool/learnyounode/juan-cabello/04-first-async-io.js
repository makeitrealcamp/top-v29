const fs = require('fs');
const path = process.argv[2];
fs.readFile(path, function (error, data){
  const parrafos = data.toString().split('\n');
  console.log(parrafos.length - 1);
});
