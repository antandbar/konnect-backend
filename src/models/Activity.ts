'use strict';

const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
import LocationSchema from "./Location"
import CategorySchema from "./Category"

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
      model:"locations",
      referencesKey:"id"
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
      model:"categories",
      referencesKey:"id"
    }
  },
  {
    sequelize: db,
    modelName: 'activities',
  },
);

LocationSchema.hasMany(ActivitySchema);
CategorySchema.hasMany(ActivitySchema);
export default ActivitySchema;
