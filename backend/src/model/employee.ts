import { Sequelize, DataTypes } from 'sequelize';

import type { DBitem } from '../interfaces';

export interface Employee extends DBitem {
  firstName: string;
  lastName: string;
}

export default (sequelize: Sequelize) => {
  return sequelize.define('employee', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
