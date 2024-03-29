/* eslint-disable */
import Logger from './api/lib/logger';
import { syncDB } from './config';
import { Server } from 'net';
import { Application } from 'express';
import { PORT } from './constants';
import { createServer } from './server';
const cors = require('cors');
export function startServer(): Server {
  const app: Application = createServer();
  const corsOption = {
    origin: '*'
  };
  app.use(cors(corsOption));
  return app.listen(PORT, async () => {
    await syncDB();
    Logger.debug(`Server is listening on port ${PORT}`);
  });
}

startServer();
