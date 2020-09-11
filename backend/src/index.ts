import * as restify from 'restify';

import pkg from '../package.json';

import * as home from './routes/home';
import * as employees from './routes/employees';

export const server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

home.addRoutes(server);
employees.addRoutes(server);

export const start = (port?: number) => {
  /* istanbul ignore next */
  const p = port || process.env.port || 8080;
  
  return new Promise<void>(resolve =>
    server.listen(p, () => {
      console.log(`${pkg.name}@${pkg.version} listening on port ${p}`);
      resolve();
    })
  );
}

export const stop = () => {
  return new Promise<void>(resolve => server.close(resolve));
}

/* istanbul ignore if */
if (require.main === module) {
  start();
}
