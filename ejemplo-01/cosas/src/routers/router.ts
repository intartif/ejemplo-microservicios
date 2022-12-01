import { Router } from 'express';
import CosaModel from '../models/cosa.model';
import stan from '../publisher/nats-streaming.listener';

const routes = Router();

routes.get('/', async (req, res) => {
  const items = await CosaModel.find({});

  return res.status(200).json(items);
});

routes.post('/', async (req, res) => {
  const data = { name: req.body.name };
  const item = await CosaModel.create(data);

  stan.publish('cosas:add', JSON.stringify(data), (err, guid) => {
    if (err) {
      console.log('publish failed: ' + err);
    } else {
      console.log('published message with guid: ' + guid);
    }
  });

  return res.status(200).json(item);
});

export { routes };
