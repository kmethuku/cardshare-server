/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import './config';
import express from 'express';
import cors from 'cors';
import router from './router';
import { db } from './db';

const server = express();
const port:number = 3001;

interface Cors {
  origin: string;
  optionsSuccessStatus: number;
  credentials: boolean;
}
const corsOptions:Cors = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};

server.use(cors(corsOptions));
server.use(express.json());
server.use(router);

(async (): Promise<any> => {
  await db.once('open', () => {
    // eslint-disable-next-line no-console
    console.log('database connected');
  });
  server.listen(port, (): void => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}...`);
  });
})();
