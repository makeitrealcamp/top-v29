import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

const PORT = process.env.PORT || 8080;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";


io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    console.log("🚀 ~ file: server.js:24 ~ socket.on ~ data:", data)
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    socket.leave(roomId);
  });
})

server.listen(PORT, () => {
  console.log('listening on *:8080');
});


