let http = require('http');
let stringf = '';
http.get(process.argv[2], function callback(response) {

  response.on('data', function (data) {
    stringf += data.toString();
  });
  response.on('end', function () {
    console.log(stringf);
    stringf = '';
    http.get(process.argv[3], function callback(response) {
      response.on('data', function (data) {
        stringf += data.toString();
      });
      response.on('end', function () {
        console.log(stringf);
        stringf = '';
        http.get(process.argv[4], function callback(response) {
          response.on('data', function (data) {
            stringf += data.toString();
          });
          response.on('end', function () {
            console.log(stringf);
          });
        });
      });
    });
  });
});