import { Sequelize } from 'sequelize';

import employee from './employee';

/**
 * Once we have initialized the individual models in `init()`,
 * store them here for fetching using the function `models()`
 */
let _models: null | ReturnType<typeof initModels> = null;

export const initModels = (sequelize: Sequelize) => {
  const models = {
    employee: employee(sequelize)
  }

  return models;
}

export const init = async (path: string) => {
  const sequelize = new Sequelize(
    'unochadb',
    '',
    '',
    {
      dialect: 'sqlite',
      storage: path,
    }
  );

  _models = initModels(sequelize);

  await sequelize.authenticate();
  await sequelize.sync();
  return sequelize;
}

export const models = () => {
  /* istanbul ignore if */
  if (!_models) {
    throw new Error('Models not initialized');
  }
  return _models;
}
