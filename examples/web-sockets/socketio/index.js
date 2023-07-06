const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);


  socket.on('top-v29', (msg) => {
    console.log('top-v29', msg);

    io.emit('top-v29', msg);
  })


  // socket.on('disconnect', () => {
  //   console.log('user disconnected');
  // });
})

server.listen(8080, () => {
  console.log('listening on *:8080');
});


