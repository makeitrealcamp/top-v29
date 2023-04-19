let http = require('http');
let link = process.argv[2];

http.get(link, function (response) {
  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log(data);
  }).on('error', function (error) {
    console.error(error);
  });
})