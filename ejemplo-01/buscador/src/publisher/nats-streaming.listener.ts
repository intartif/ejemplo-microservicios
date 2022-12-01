import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';
import CosaModel from '../models/cosa.model';

const stan = nats.connect(
  'nats_example',
  `buscador_client${randomBytes(6).toString('hex')}`, 
  {
    url: `http://${process.env.NATS_HOST}:${process.env.NATS_PORT}`
  }
);

stan.on('connect', async () => {
  console.log('BUSCADOR - Publisher connected to NATS');

  stan.subscribe('cosas:add').on('message', msg => {
    const data = JSON.parse(msg.getData());
    console.log(`Agregando:  ${data}`);

    if (data) {
      new CosaModel(data).save();
      console.log('Guardando');
    }
  });
});

export default stan;
