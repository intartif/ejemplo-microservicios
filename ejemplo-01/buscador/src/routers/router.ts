import { Router } from 'express';
import CosaModel from '../models/cosa.model';

const routes = Router();

routes.get('/', async (req, res) => {
  const items = await CosaModel.find({});

  return res.status(200).json(items);
});

routes.get('/:name', async (req, res) => {
  const item = await CosaModel.findOne({
    name: req.params.name.trim()
  });

  if (!item) {
    return res.status(404).json(
      {
        error: 'Item not found'
      });
  }

  return res.status(200).json(item);
});

export { routes };
