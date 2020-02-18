import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';

import apiController from './routes/apiController';

import { throwError } from '@Lib/error';
import { connect } from 'database';

dotenv.config();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', apiController);

app.use((req, res, next) => {
  // err.status = 404;
  throwError(res, 'Not_Found', 'Not Found Page');
});

connect(false, true).then(() => {
  console.log('db connected!');
});

export default app;
