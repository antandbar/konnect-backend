'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';
import UserSchema from '../models/User';
import ActivitySchema from '../models/Activity';
import userStatusSchema from '../models/UserStatus';

class TrackingBo {
  
  // Se utilizan filtros para filtrar los trakings
  public async getTracking(filters: any): Promise<Tracking[]> {
    const topics: Tracking[] = await TrackingSchema.findAll({
      where: filters,
      attributes: {
        exclude: ['userId', 'activityId', 'userStatusId'],
      },
      include: [
        {
          model: UserSchema,
          attributes: { exclude: ['password'] },
        },
        {
          model: ActivitySchema,
        },
        {
          model: userStatusSchema,
        },
      ],
    });

    return topics;
  }

  public async postTracking(data: any): Promise<Tracking[]> {
    const tracking: any = await TrackingSchema.create(data);

    return tracking;
  }

  public async updateTracking(id: any, data: any): Promise<Tracking[]> {
    const tracking: any = TrackingSchema.update(data, { where: { id: id } });

    return tracking;
  }

  public async deleteTracking(id: any): Promise<Tracking[]> {
    const tracking: any = await TrackingSchema.destroy({
      where: {
        id: id,
      },
    });

    return tracking;
  }
}

export const trackingBo = new TrackingBo();
