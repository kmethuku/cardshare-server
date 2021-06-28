/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import router from './router';
import { db } from './db';

require('dotenv').config();

const PORT = (process.env.PORT as string);
const ORIGIN = (process.env.ORIGIN as string);

const server = express();
const port: number = Number(PORT) || 3001;

interface Cors {
  origin: string;
  optionsSuccessStatus: number;
  credentials: boolean;
}

const corsOptions: Cors = {
  origin: ORIGIN,
  optionsSuccessStatus: 200,
  credentials: true,
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(router);
server.get('*', (req, res) => {
  res.status(400).send('No routes found.');
});

(async (): Promise<any> => {
  await db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('Database connected.');
  });
  server.listen(port, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}...`);
  });
})();
