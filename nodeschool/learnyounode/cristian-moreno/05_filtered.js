const fs = require('fs');
const path = require('path');

const folder = process.argv[2];
const ext = `.${process.argv[3]}`; //.md .txt .js -> '.' + ext

fs.readdir(folder, (err, files) => {
  if (err) return console.error(err);

  files.forEach((file) => {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
