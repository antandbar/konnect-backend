import ActivitySchema from './Activity';
import LocationSchema from './Location';
import CategorySchema from './Category';
import UserSchema from './User';
import CommentSchema from './Comment';
import UserStatusSchema from './UserStatus';
import TrackingSchema from './Tracking';

class Associations {
  public relations() {
    LocationSchema.hasMany(ActivitySchema, { foreignKey: 'locationId' });
    CategorySchema.hasMany(ActivitySchema, { foreignKey: 'activityId' });
    ActivitySchema.belongsTo(LocationSchema);
    ActivitySchema.belongsTo(CategorySchema);

    UserSchema.hasMany(CommentSchema, { foreignKey: 'userId' });
    ActivitySchema.hasMany(CommentSchema, { foreignKey: 'activityId' });
    CommentSchema.belongsTo(UserSchema);
    CommentSchema.belongsTo(ActivitySchema);

    UserSchema.hasMany(TrackingSchema, { foreignKey: 'userId' });
    ActivitySchema.hasMany(TrackingSchema, { foreignKey: 'activityId' });
    UserStatusSchema.hasMany(TrackingSchema, { foreignKey: 'userStatusId' });
    TrackingSchema.belongsTo(UserSchema);
    TrackingSchema.belongsTo(ActivitySchema);
    TrackingSchema.belongsTo(UserStatusSchema);
  }
}

export default new Associations();
