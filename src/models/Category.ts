'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';

export interface Category {
  id: number;
  categoryName: string;


}

class CategorySchema extends Model<Category> implements Category {
  id!: number;
  categoryName!: string;

}

CategorySchema.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'categories',
  },
);

export default CategorySchema;
