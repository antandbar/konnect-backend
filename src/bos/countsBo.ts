'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';

// Se utilizan counts
class CountsBo {
  public async getCountSignedup(activityId:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 2, activityId: activityId }
    });

    return trackings;
  }

  public async getCountInterested(activityId:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 3, activityId: activityId }
    });

    return trackings;
  }
}

export const countsBo = new CountsBo();
