'use strict';

import { Request, Response } from 'express';
import { Activity } from '../models/Activity';
import { activitiessBo } from '../bos/activitiesBo'

class ActivitiesController {
  public async getActivities(req: Request, res: Response): Promise<void> {
    const activity: Activity[] = await activitiessBo.getActivities();
    res.status(200).json({ results: activity });
  }

}

export const activitiesController = new ActivitiesController();
