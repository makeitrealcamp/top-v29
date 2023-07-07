const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');
const { createClient } = require('redis')

const app = express();
const client = createClient({
  url: 'redis://localhost:6379'
});

app.use(responseTime());

app.get('/characters', async(req, res) => {
  try {
    const reply = await client.get(req.originalUrl);

    if (reply) {
      console.log('Cache hit');
      return res.json(JSON.parse(reply));
    }

    // Pida los datos
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    // Expire los datos en 10 segundos
    const expires = 10; // 60 * 60 * 24 * 30; // 1 week

    // Almacene los datos en Redis
    await client.set(req.originalUrl, JSON.stringify(response.data.results), {
      EX: expires
    });

    // Envíe los datos
    return res.json(response.data.results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/characters/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const reply = await client.get(req.originalUrl);

    if (reply) {
      console.log('Cache hit');
      return res.json(JSON.parse(reply));
    }

    // Pida los datos
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    // Almacene los datos en Redis
    await client.set(req.originalUrl, JSON.stringify(response.data));

    // Envíe los datos
    return res.json(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(8080, async() => {
  client.on('error', err => console.log('Redis Client Error', err));

  await client.connect();
  console.log('Listening on port 8080');
});
