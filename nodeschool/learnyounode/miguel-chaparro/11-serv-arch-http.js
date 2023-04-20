let http = require('http'),
  fs = require('fs');

let server = http.createServer(function (req, res) {
  let file = process.argv[3],
    readerStream = fs.createReadStream(file);

  readerStream.on('open', function () {
    readerStream.pipe(res);
  });

});

server.listen(process.argv[2]);