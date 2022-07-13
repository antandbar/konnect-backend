'use strict';

import { Request, Response } from 'express';
import { Tracking } from '../models/Tracking';
import { trackingBo } from '../bos/trackingBo';

class TrackingController {
  public async getTracking(req: Request, res: Response): Promise<void> {
    const trakings: Tracking[] = await trackingBo.getTracking();
    res.status(200).json({ results: trakings });
  }
}

export const trackingController = new TrackingController();
