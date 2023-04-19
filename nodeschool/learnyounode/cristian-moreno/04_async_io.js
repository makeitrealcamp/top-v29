const fs = require('fs'); // commonJS module

const path = process.argv[2];

fs.readFile(path, (err, contents) => {
  if (err) {
    return console.error(err);
  }

  const lines = contents.toString().split('\n');

  console.log(lines.length - 1);
});
