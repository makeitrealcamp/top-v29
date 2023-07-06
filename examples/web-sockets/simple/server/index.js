const express = require('express');
const socket = require('express-ws')
const { faker } = require('@faker-js/faker');

const app = express();
socket(app);

const TYPES = ['INFO', 'ERROR', 'WARNING', 'SUCCESS']


app.ws('/', (ws, res) => {

  ws.on('message', (msg) => {
    console.log(msg);
  })

  // Send a message to the client every second
  setInterval(() => {
    const msg = {
      message: faker.lorem.sentence(),
      type: faker.helpers.arrayElement(TYPES),
      time: new Date().toDateString()
    }

    ws.send(JSON.stringify(msg));
  }, 20000);

})


app.listen(8080, () => {
  console.log('Server started on port 8080');
})
