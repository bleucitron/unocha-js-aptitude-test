import fetch from 'node-fetch';

import config from '../config';

import type { Employee } from '../../src/model/employee';

const employee: Employee = {
  firstName: 'John',
  lastName: 'Lennon',
};

const otherEmployee: Employee = {
  firstName: 'Paul',
  lastName: 'McCartney',
};

describe('employees endpoints', () => {
  it('get endpoint', async () => {
    const res = await fetch(`http://localhost:${config.TEST_PORT}/employees`);

    expect(res.ok).toBe(true);

    const output = await res.json();

    expect(Array.isArray(output)).toBe(true);
  });

  it('get/[id] endpoint 404', async () => {
    const id = 1;
    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(404);
  });

  it('post endpoint', async () => {
    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees`,
      options,
    );

    expect(res.ok).toBe(true);

    const output = await res.json();

    expect(output.firstName).toBe('John');
    expect(output.lastName).toBe('Lennon');
    expect(output).toHaveProperty('id');
    expect(output).toHaveProperty('updatedAt');
    expect(output).toHaveProperty('createdAt');
  });

  it('post endpoint 400', async () => {
    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(400);
  });

  it('post endpoint 400: bad info', async () => {
    const options = {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee: {} }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(400);
  });

  it('get/[id] endpoint', async () => {
    const id = 1;
    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
    );

    expect(res.ok).toBe(true);

    const output = await res.json();

    expect(output.firstName).toBe('John');
    expect(output.lastName).toBe('Lennon');
  });

  it('put/[id] endpoint', async () => {
    const id = 1;

    const options = {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee: otherEmployee }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(true);

    const output = await res.json();

    expect(output.firstName).toBe('Paul');
    expect(output.lastName).toBe('McCartney');
  });

  it('put/[id] endpoint 400', async () => {
    const id = 1;

    const options = {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(400);
  });

  it('put/[id] endpoint 404', async () => {
    const id = 2;

    const options = {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee: otherEmployee }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(404);
  });

  it('put/[id] endpoint 400: bad info', async () => {
    const id = 1;

    const options = {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee: { firstName: {} } }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    console.log('TEST', await res.json());

    expect(res.ok).toBe(false);
    expect(res.status).toBe(400);
  });

  it('del/[id] endpoint 400', async () => {
    const id = 1;

    const options = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(400);
  });

  it('del/[id] endpoint', async () => {
    const id = 1;

    const options = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee: otherEmployee }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(true);
  });

  it('del/[id] endpoint 404', async () => {
    const id = 2;

    const options = {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ employee }),
    };

    const res = await fetch(
      `http://localhost:${config.TEST_PORT}/employees/${id}`,
      options,
    );

    expect(res.ok).toBe(false);
    expect(res.status).toBe(404);
  });
});
