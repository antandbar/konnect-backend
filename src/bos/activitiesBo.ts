'use strict';

import ActivitySchema, { Activity } from '../models/Activity';
import LocationSchema from '../models/Location';
import CategorySchema from '../models/Category';

class ActivitiessBo {
  public async getActivities(filters:any): Promise<Activity[]> {

    const activities: Activity[] = await ActivitySchema.findAll({
      where: filters,
      attributes: {
        exclude: ['locationId', 'categoryId'],
      },
      include: [
        {
          model: LocationSchema,
        },
        {
          model: CategorySchema,
        },
      ],
    });

    return activities;
  }

  public async getActivityDetail(id: any): Promise<Activity[]> {
    const activities: Activity[] = await ActivitySchema.findAll({
      where: {
        id: id,
      },
      attributes: {
        exclude: ['locationId', 'categoryId'],
      },
      include: [
        {
          model: LocationSchema,
        },
        {
          model: CategorySchema,
        },
      ],
    });

    return activities;
  }

  public async postActivities(data: any): Promise<Activity[]> {
    const activity: any = await ActivitySchema.create(data);

    return activity;
  }

  public async deleteActivities(id: any): Promise<Activity> {
    const activity: any = await ActivitySchema.destroy({
      where: {
        id: id,
      },
    });

    return activity;
  }
}

export const activitiessBo = new ActivitiessBo();
