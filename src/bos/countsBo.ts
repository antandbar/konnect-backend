'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';

class CountsBo {
  public async getCountSignedup(): Promise<Tracking[]> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 2 }
    });

    return trackings;
  }

  public async getCountInterested(): Promise<Tracking[]> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 3 }
    });

    return trackings;
  }
}

export const countsBo = new CountsBo();
