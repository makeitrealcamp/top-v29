require('dotenv').config();

const express = require('express');

const configExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

connectDB();
configExpress(app);
routes(app);

module.exports = app;
