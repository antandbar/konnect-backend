'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';

class CountsBo {
  public async getCountSignedup(id:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 2, userId: id }
    });

    return trackings;
  }

  public async getCountInterested(id:any): Promise<Tracking> {
    const trackings: any = await TrackingSchema.count({
      where: {  userStatusId: 3, userId: id }
    });

    return trackings;
  }
}

export const countsBo = new CountsBo();
