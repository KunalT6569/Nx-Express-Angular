/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import appRouter from './app/routes';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { connectDb } from './app/db/db.connect';

const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use('/api', appRouter);

const port = process.env.PORT;
const server = app.listen(port, () => {
  connectDb();
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
