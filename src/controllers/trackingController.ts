'use strict';

import { Request, Response, NextFunction } from 'express';
import { Tracking } from '../models/Tracking';
import { trackingBo } from '../bos/trackingBo';

class TrackingController {
  public async getTracking(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const trakings: Tracking[] = await trackingBo.getTracking();
      res.status(200).json({ results: trakings });
    } catch (error) {
      next(error);
    }
  }
}

export const trackingController = new TrackingController();
