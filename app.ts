import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

import { throwError } from '@Lib/error';

dotenv.config();

const app: express.Application = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use('/api', )

app.use((req, res, next) => {
  // err.status = 404;
  throwError(res, 'Not_Found', 'Not Found Page');
});

export default app;
