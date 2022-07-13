'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface UserStatus {
  id: number;
  statusDescription: string;


}

class UserStatusSchema extends Model<UserStatus> implements UserStatus {
  id!: number;
  statusDescription!: string;

}

UserStatusSchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    statusDescription: {
      type: DataTypes.STRING(10),
      allowNull: false,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'userStatuses',
  },
);

export default UserStatusSchema;
