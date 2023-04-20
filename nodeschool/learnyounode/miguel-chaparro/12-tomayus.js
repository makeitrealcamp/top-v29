let http = require('http');
let map = require('through2-map');


let server = http.createServer(function (req, res) {
  if (req.method !== 'POST') {
    return res.end('SEND POST\n')
  }
  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);
});

server.listen(process.argv[2]);