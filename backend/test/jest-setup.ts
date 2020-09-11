import * as server from '../src';

import config from './config';

beforeAll(async () => {
  await server.start(config.TEST_PORT);
});

afterAll(async () => {
  await server.stop();
});
