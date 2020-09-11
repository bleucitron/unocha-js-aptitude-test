import fetch from 'node-fetch';

import config from '../config';

describe('home endpoints', () => {

  it('home endpoint', async () => {

    const res = await fetch(`http://localhost:${config.TEST_PORT}`);

    expect(res.ok).toBe(true);
    expect(await res.json()).toEqual({
      status: 'success'
    });
  })

});
