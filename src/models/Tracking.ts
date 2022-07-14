'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';



export interface Tracking {
  id?: number;
  userId: number;
  activityId:number;
  userStatusId:number;

}

class TrackingSchema extends Model<Tracking> implements Tracking {
  id!: number;
  userId!: number;
  activityId!:number;
  userStatusId!:number;
}

TrackingSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'trackings',
  },
);



export default TrackingSchema;
