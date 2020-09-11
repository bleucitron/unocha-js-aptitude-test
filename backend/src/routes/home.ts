import { Server } from 'restify';

export const addRoutes = (server: Server) => {

  server.get('/', async (req, res) => {
    res.send({
      status: 'success'
    });
  })

}
