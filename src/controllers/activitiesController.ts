'use strict';

import { Request, Response, NextFunction } from 'express';
import { Activity } from '../models/Activity';
import { activitiessBo } from '../bos/activitiesBo';

class ActivitiesController {
  public async getActivities(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { categoryId } = req.query;
      const { locationId } = req.query;
      const { activityDate } = req.query;

      const filters: any = {};

      if (categoryId) filters.categoryId = categoryId;
      if (locationId) filters.locationId = locationId;
      if (activityDate) filters.activityDate = activityDate;

      const activity: Activity[] = await activitiessBo.getActivities(filters);
      res.status(200).json({ results: activity });
    } catch (error) {
      next(error);
    }
  }

  public async getActivityDetails(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const activity: any = await activitiessBo.getActivityDetail(
        req.params.id,
      );
      res.status(200).json({ results: activity });
    } catch (error) {
      next(error);
    }
  }

  public async postctivities(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
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
      res.status(201).json({ results: activity });
    } catch (error) {
      next(error);
    }
  }

  public async deleteActivities(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const activity: any = await activitiessBo.deleteActivities(req.params.id);

      res.status(200).json({ results: activity });
    } catch (error) {
      next(error);
    }
  }
}

export const activitiesController = new ActivitiesController();
