import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import { Major, Field } from '@Lib/types';

export default class Application extends Model<Application> {
  public pk: number;
  public email: string;
  public major: Major;
  public grade: number;
  public classNum: number;
  public studentNum: number;
  public name: string;
  public field: Field;
  public content: string;
  public password: string;
  public passwordKey: string;
  public isSubmit: boolean;

  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

Application.init(
  {
    pk: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false
    },
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    classNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    studentNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    field: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordKey: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isSubmit: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    sequelize,
    tableName: 'applications'
  }
);
