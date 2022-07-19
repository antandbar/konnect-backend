'use strict';

import { Request, Response, NextFunction } from 'express';
import { Tracking } from '../models/Tracking';
import { trackingBo } from '../bos/trackingsBo';

class TrackingController {
  public async getTracking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { userId, activityId, userStatusId } = req.query;

      // Se guarda en filtro si llegan en req.query
      const filters: any = {};

      if (userId) filters.userId = userId;
      if (activityId) filters.activityId = activityId;
      if (userStatusId) filters.userStatusId = userStatusId;
      const trakings: Tracking[] = await trackingBo.getTracking(filters);
      res.status(200).json({ results: trakings });
    } catch (error) {
      next(error);
    }
  }

  public async postTracking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = {
        userId: req.body.userId,
        activityId: req.body.activityId,
        userStatusId: req.body.userStatusId,
      };

      const tracking: Tracking[] = await trackingBo.postTracking(data);
      res.status(201).json({ results: tracking });
    } catch (error) {
      next(error);
    }
  }

  public async updateTracking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = {
        userId: req.body.userId,
        activityId: req.body.activityId,
        userStatusId: req.body.userStatusId,
      };

      const tracking: Tracking[] = await trackingBo.updateTracking(
        req.params.id,
        data,
      );
      res.status(200).json({ results: tracking });
    } catch (error) {
      next(error);
    }
  }

  public async deleteTracking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const tracking: any = await trackingBo.deleteTracking(req.params.id);

      res.status(200).json({ results: tracking });
    } catch (error) {
      next(error);
    }
  }
}

export const trackingController = new TrackingController();
