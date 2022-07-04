'use strict';

const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
import UserSchema from "./User"
import ActivitySchema from "./Activity"
import UserStatusSchema from "./UserStatus"


export interface Tracking {
  id: number;
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
      model:"users",
      referencesKey:"id"
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model:"activities",
      referencesKey:"id"
    },
    userStatusId: {
      type: DataTypes.STRING(50),
      allowNull: false,
      model:"userStatuses",
      referencesKey:"id"
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'trackings',
  },
);

UserSchema.hasMany(TrackingSchema);
ActivitySchema.hasMany(TrackingSchema);
UserStatusSchema.hasMany(TrackingSchema)

export default TrackingSchema;
