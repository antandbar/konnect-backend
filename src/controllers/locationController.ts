'use strict';

import { Request, Response } from 'express';
import { Location } from '../models/Location';
import { locationBo } from '../bos/locationBo'

class LocationController {
  public async getLocation(req: Request, res: Response): Promise<void> {
    const location: Location[] = await locationBo.getLocation();
    res.status(200).json({ results: location });
  }

}

export const locationController = new LocationController();