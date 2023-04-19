let http = require('http');
let link = process.argv[2];

http.get(link, function (response) {
  let cod = '';
  response.setEncoding('utf8');
  response.on('data', function (data) {
    cod += data;
  });
  response.on('end', function () {
    console.log(cod.length);
    console.log(cod);
  })
});