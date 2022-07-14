'use strict';

import { Request, Response } from 'express';
import { Activity } from '../models/Activity';
import { activitiessBo } from '../bos/activitiesBo';

class ActivitiesController {
  public async getActivities(req: Request, res: Response): Promise<void> {
    const activity: Activity[] = await activitiessBo.getActivities();
    res.status(200).json({ results: activity });
  }

  public async getActivityDetails(req: Request, res: Response): Promise<void> {
    const activity: any = await activitiessBo.getActivityDetail(req.params.id);
    res.status(200).json({ results: activity });
  }

  public async postctivities(req: Request, res: Response): Promise<void> {
    const data = {
      title: req.body.title,
      description: req.body.description,
      userLimit: req.body.userLimit,
      activityDate: req.body.activityDate,
      locationId: req.body.locationId,
      place: req.body.place,
      maxAge: req.body.maxAge,
      minAge: req.body.minAge,
      categoryId: req.body.categoryId,
    };

    const activity: Activity[] = await activitiessBo.postActivities(data);
    res.status(200).json({ results: activity });
  }

  public async deleteActivities(req: Request, res: Response): Promise<void> {
    const activity: any = await activitiessBo.deleteActivities(req.params.id);

    res.status(200).json({ results: activity });
  }
}

export const activitiesController = new ActivitiesController();
