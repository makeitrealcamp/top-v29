let fs = require('fs'); let path = require('path');
let directorio = process.argv[2]; let finalext = '.' + process.argv[3];

fs.readdir(directorio, function (error, files) {
  if (error) {
    return console.log(error);
  }

  files.forEach(function (file) {
    if (path.extname(file) === finalext) {
      console.log(file);
    };
  });
});