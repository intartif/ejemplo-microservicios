import nats from 'node-nats-streaming';
import { randomBytes } from 'crypto';

const stan = nats.connect(
  'nats_example',
  `cosas_client${randomBytes(6).toString('hex')}`, 
  {
    url: `http://${process.env.NATS_HOST}:${process.env.NATS_PORT}`
  }
);

stan.on('connect', async () => {
  console.log('COSAS - Publisher connected to NATS');
});

export default stan;
