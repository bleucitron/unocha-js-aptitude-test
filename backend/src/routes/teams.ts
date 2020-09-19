import { ValidationError } from 'sequelize';
import { Server } from 'restify';
import { models } from '../model';

export const addRoutes = (server: Server) => {
  server.get('/teams', async (req, res) => {
    try {
      res.send(await models().team.findAll());
    } catch (err) {
      res.send(500);
    }
  });

  server.get('/teams/:id', async (req, res) => {
    try {
      const team = await models().team.findByPk(req.params.id);
      if (!team) {
        res.send(404);
      } else {
        res.send(team);
      }
    } catch (err) {
      res.send(500);
    }
  });

  server.post('/teams', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const team = await models().team.create(req.body.team);
      res.send(team);
    } catch (err) {
      if (err instanceof ValidationError) {
        res.send(400, err.toString());
      } else {
        console.error(err);
        res.send(500);
      }
    }
  });

  server.put('/teams/:id', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const team = await models().team.findByPk(req.params.id);
      if (!team) {
        res.send(404);
      } else {
        res.send(await team.update(req.body.team));
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

  server.put('/teams/:id/add/:employeeId', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const { id, employeeId } = req.params;

      const team = await models().team.findByPk(id);
      if (!team) {
        res.send(404);
      } else {
        const updatedMembers = [...new Set([...team.members, employeeId])];

        res.send(await team.update({ members: updatedMembers }));
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

  server.put('/teams/:id/remove/:employeeId', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const { id, employeeId } = req.params;

      const team = await models().team.findByPk(id);
      if (!team) {
        res.send(404);
      } else {
        const updatedMembers = team.members.filter(
          (i: number) => i !== employeeId,
        );

        res.send(await team.update({ members: updatedMembers }));
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

  server.put('/teams/:id/leader/:employeeId', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const { id, employeeId } = req.params;

      const team = await models().team.findByPk(id);
      if (!team) {
        res.send(404);
      } else {
        res.send(await team.update({ leader: employeeId }));
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

  server.del('/teams/:id', async (req, res) => {
    if (!req.body?.team) {
      res.send(400, 'Missing team information');
      return;
    }

    try {
      const team = await models().team.findByPk(req.params.id);
      if (!team) {
        res.send(404);
      } else {
        await team.destroy();
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
};
