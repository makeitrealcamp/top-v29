let fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, data) {
  if (error) {
    console.log('error' + error)
  }
  let ftext = data.split('\n');
  console.log(ftext.length - 1)
});
