'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';

// Se utilizan counts
class CountsBo {
  public async getCountSignedup(userId:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 2, userId: userId }
    });

    return trackings;
  }

  public async getCountInterested(userId:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 3, userId: userId }
    });

    return trackings;
  }
}

export const countsBo = new CountsBo();
