import { ValidationError } from 'sequelize'
import { Server } from 'restify';
import { models } from '../model';

export const addRoutes = (server: Server) => {

  server.get('/employees', async (req, res) => {
    try {
      res.send(await models().employee.findAll())
    } catch (err) {
      res.send(500);
    }
  });

  server.get('/employees/:id', async (req, res) => {
    try {
      const employee = await models().employee.findByPk(req.params.id);
      if (!employee) {
        res.send(404);
      } else {
        res.send(employee);
      }
    } catch (err) {
      res.send(500);
    }
  });

  server.post('/employees', async (req, res) => {

    if (!req.body?.employee) {
      res.send(400, 'Missing employee information');
      return;
    }

    try {
      const employee = await models().employee.create(req.body.employee);
      res.send(employee);
    } catch (err) {
      if (err instanceof ValidationError) {
        res.send(400, err.toString());
      } else {
        console.error(err);
        res.send(500);
      }
    }
  });

  server.put('/employees/:id', async (req, res) => {

    if (!req.body?.employee) {
      res.send(400, 'Missing employee information');
      return;
    }

    try {
      const employee = await models().employee.findByPk(req.params.id);
      if (!employee) {
        res.send(404);
      } else {
        res.send(await employee.update(req.body.employee));
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        res.send(400, err.toString());
      } else {
        console.error(err);
        res.send(500);
      }
    }
  });

  server.del('/employees/:id', async (req, res) => {

    if (!req.body?.employee) {
      res.send(400, 'Missing employee information');
      return;
    }

    try {
      const employee = await models().employee.findByPk(req.params.id);
      if (!employee) {
        res.send(404);
      } else {
        await employee.destroy();
        res.send(200);
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        res.send(400, err.toString());
      } else {
        console.error(err);
        res.send(500);
      }
    }
  });

}
