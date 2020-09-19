import { Sequelize, DataTypes, Model, BuildOptions } from 'sequelize';

export interface Team {
  name: string;
  leader: string;
  members: number[];
}

interface TeamModel extends Model, Team {
  readonly id: number;
  name: string;
  leader: string;
  members: number[];
}

type TeamStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): TeamModel;
};

export default (sequelize: Sequelize) => {
  return <TeamStatic>sequelize.define('team', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    leader: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    members: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
  });
};
