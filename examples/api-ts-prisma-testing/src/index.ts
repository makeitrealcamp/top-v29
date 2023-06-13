import * as dotenv from 'dotenv';

dotenv.config();

import { server } from './app';

function startServer() {
  const PORT = (process.env.PORT as string) || 8080;

  server.listen(PORT, () => {
    console.info(`Server running 🤖🚀 at http://localhost:${PORT}`);
  });
}

setImmediate(startServer);

export default server;
