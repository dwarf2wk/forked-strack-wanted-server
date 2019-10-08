import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(bodyParser({
    limit: '5mb',
    extended: true,
}));
app.use('/', routes);

export default app;
