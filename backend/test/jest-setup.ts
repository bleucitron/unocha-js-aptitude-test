import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

import * as server from '../src';

import config from './config';

const unlink = promisify(fs.unlink);

const TEST_DB = path.join(path.dirname(__dirname), 'test.sqlite');

beforeAll(async () => {

  // Delete any existing test database
  await unlink(TEST_DB).catch(err => {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  });

  await server.start({
    port: config.TEST_PORT,
    databasePath: TEST_DB,
  });
});

afterAll(async () => {
  await server.stop();
});
