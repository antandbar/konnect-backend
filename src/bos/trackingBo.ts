'use strict';

import TrackingSchema, { Tracking } from '../models/Tracking';

class TrackingBo {
  public async getTracking(): Promise<Tracking[]> {
    const topics: Tracking[] = await TrackingSchema.findAll();

    return topics;
  }
}

export const trackingBo = new TrackingBo();