'use strict';

import ActivitySchema, { Activity } from '../models/Activity';

class ActivitiessBo {
  public async getActivities(): Promise<Activity[]> {
    const topics: Activity[] = await ActivitySchema.findAll();

    return topics;
  }
}

export const activitiessBo = new ActivitiessBo();
