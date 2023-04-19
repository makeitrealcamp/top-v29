const readMyDir = require('./06_my_module');

const folder = process.argv[2];
const ext = process.argv[3];

readMyDir(folder, ext, (err, files) => {
  if (err) return console.error(err);

  files.forEach((file) => {
    console.log(file);
  });
});
