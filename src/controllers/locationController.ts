'use strict';

import { Request, Response, NextFunction } from 'express';
import { Location } from '../models/Location';
import { locationBo } from '../bos/locationBo';

class LocationController {
  public async getLocation(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const location: Location[] = await locationBo.getLocation();
      res.status(200).json({ results: location });
    } catch (error) {
      next(error);
    }
  }

  public async postLocation(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = req.body;
      const location: Location[] = await locationBo.postLocation(data);
      res.status(201).json({ results: location });
    } catch (error) {
      next(error);
    }
  }
}

export const locationController = new LocationController();
