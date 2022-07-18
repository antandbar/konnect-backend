'use strict';

import { Request, Response, NextFunction } from 'express';
import { Tracking } from '../models/Tracking';
import { countsBo } from '../bos/countsBo';

class CountsController {
  public async getCountSignedup(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const counts: Tracking[] = await countsBo.getCountSignedup();
      res.status(200).json({ result: counts });
    } catch (error) {
      next(error);
    }
  }

  public async getCountInterested(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const counts: Tracking[] = await countsBo.getCountInterested();
      res.status(200).json({ result: counts });
    } catch (error) {
      next(error);
    }
  }
}

export const countsController = new CountsController();
