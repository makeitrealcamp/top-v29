let modulo = require('./6.2-mymodule');
let dir = process.argv[2];
let path = '.' + process.argv[3];

modulo(dir, path, function (error, data) {
  data.forEach(function (file) {
    console.log(file);
  })
})