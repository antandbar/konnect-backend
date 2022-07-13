'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Activity {
  id: number;
  title: string;
  description:string;
  userLimit:number;
  activityDate:Date;
  locationId:number;
  place:string;
  maxAge:number;
  minAge:number;
  categoryId:number;
}

class ActivitySchema extends Model<Activity> implements Activity {
  id!: number;
  title!: string;
  description!:string;
  userLimit!:number;
  activityDate!:Date;
  locationId!:number;
  place!:string;
  maxAge!:number;
  minAge!:number;
  categoryId!:number;
}

ActivitySchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(900),
    },
    userLimit: {
      type: DataTypes.INTEGER,
    },
    activityDate: {
      type: DataTypes.DATE,
    },
    locationId: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    place: {
      type: DataTypes.STRING(50),
    },
    maxAge: {
      type: DataTypes.INTEGER,
    },
    minAge: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: db,
    modelName: 'activities',
  },
);


export default ActivitySchema;
