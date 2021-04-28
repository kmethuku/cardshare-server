const express = require('express');
const server = express();
const router = require('./router');
const cors = require('cors')
const port = 3001;
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true
}

server.use(cors(corsOptions));
server.use(express.json());
server.use(router);

server.listen(port, () => console.log(
  `Server listening on port ${port}...`));
