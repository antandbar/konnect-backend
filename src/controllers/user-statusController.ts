'use strict';

import { Request, Response, NextFunction } from 'express';
import { UserStatus } from '../models/UserStatus';
import { userStatusBo } from '../bos/user-statusBo';

class UserStatusController {
  public async getUserStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userStatus: UserStatus[] = await userStatusBo.getUserStatus();
      res.status(200).json({ results: userStatus });
    } catch (error) {
      next(error);
    }
  }

  public async postUserStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const data = req.body;

      const userStatus: UserStatus[] = await userStatusBo.postUserStatus(data);
      res.status(201).json({ results: userStatus });
    } catch (error) {
      next(error);
    }
  }

  public async deleteUserStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const userStatus: UserStatus[] = await userStatusBo.deleteUserStatus(
        req.params,
      );
      res.status(200).json({ results: userStatus });
    } catch (error) {
      next(error);
    }
  }
}

export const userStatusController = new UserStatusController();
