'use strict';

const { DataTypes, Model } = require('sequelize');
const { db } = require('../lib/connectPostgresql');
import UserSchema from "./User"
import ActivitySchema from "./Activity"

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
      model:"users",
      referencesKey:"id"
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      model:"activities",
      referencesKey:"id"
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

UserSchema.hasMany(CommentSchema);
ActivitySchema.hasMany(CommentSchema);

export default CommentSchema;
