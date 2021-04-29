/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import router from './router';

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

// eslint-disable-next-line no-console
server.listen(port, ():void => console.log(
  `Server listening on port ${port}...`,
));
