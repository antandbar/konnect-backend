'use strict';

import { DataTypes, Model } from 'sequelize';
import { db } from '../lib/connectPostgresql';


export interface Comment {
  id: number;
  userId: number;
  activityId:number;
  commentText:number;
  commentDate:Date;
}

class CommentSchema extends Model<Comment> implements Comment {
  id!: number;
  userId!: number;
  activityId!:number;
  commentText!:number;
  commentDate!:Date;
}

CommentSchema.init(
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
    commentText: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    commentDate: {
      type: DataTypes.DATE,
    }
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: 'Comments',
  },
);



export default CommentSchema;
