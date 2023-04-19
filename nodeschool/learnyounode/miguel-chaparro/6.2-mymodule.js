let fs = require('fs');
let path = require('path');

function modulo2(dir, ext, callback) {
  var arr = [];
  fs.readdir(dir, function (error, data) {
    if (error) return callback(error);
    data.forEach(function (file) {
      if (path.extname(file) === ext)
        arr.push(file)
    })
    callback(null, arr);
  })
}

module.exports = modulo2;