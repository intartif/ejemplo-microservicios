import express from 'express';
import { routes } from './routers/router';
import db from './config/mongo';
import stan from './publisher/nats-streaming.listener';

const app = express();
const appid = process.env.APPID;

stan;

app.use(express.json());

db().then(() => console.log('MongoDB Connected - Buscador'))
.catch(err => console.log(`MongoDB - ${err}`));

app.use('/buscador', routes);

app.listen(appid, () => console.info(`${appid} is listening on ${appid}`));
