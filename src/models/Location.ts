'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Location {
  id: number;
  location: string;


}

class LocationSchema extends Model<Location> implements Location {
  id!: number;
  location!: string;

}

LocationSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'locations',
  },
);

export default LocationSchema;
