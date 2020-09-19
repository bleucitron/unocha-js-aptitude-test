import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';

export interface Employee {
  firstName: string;
  lastName: string;
}

interface EmployeeModel extends Model, Employee {
  readonly id: number;
}

type EmployeeStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): EmployeeModel;
};

export default (sequelize: Sequelize) => {
  return <EmployeeStatic>sequelize.define('employee', {
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
