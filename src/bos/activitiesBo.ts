'use strict';

import ActivitySchema, { Activity } from '../models/Activity';

class ActivitiessBo {
  public async getActivities(): Promise<Activity[]> {
    const topics: Activity[] = await ActivitySchema.findAll();

    return topics;
  }

  public async postActivities(data: Object): Promise<Activity[]> {
    const activity: Activity[] = await ActivitySchema.create(data);

    return activity;
  }
}

export const activitiessBo = new ActivitiessBo();
