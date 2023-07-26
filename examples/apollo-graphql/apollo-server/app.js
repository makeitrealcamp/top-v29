import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

import connectDb from './config/database.js';
import configExpress from './config/express.js';
import configGraphQL from './config/graphql.js';
import routesConfig from './routes.js';

dotenv.config();
export const app = express();
export const server = http.Server(app);

async function main() {
  await connectDb();
  configExpress(app);
  const apolloServer = await configGraphQL();
  await routesConfig(app, apolloServer);
}

main();
