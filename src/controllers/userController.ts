'use strict';

import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';
import { userBo } from '../bos/usersBo';

class UserController {
  public async getUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const location: User[] = await userBo.getUser();
      res.status(200).json({ results: location });
    } catch (error) {
      next(error);
    }
  }

  public async getUserDetail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const location: User[] = await userBo.getUserDetail(req.params.id);
      res.status(200).json({ results: location });
    } catch (error) {
      next(error);
    }
  }

  public async postUser(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const {
        userName,
        name,
        email,
        password,
        birthDate,
        userLocation,
        gender,
        bio,
      } = req.body;

      const user: User = await userBo.postUser(
        userName,
        name,
        email,
        password,
        birthDate,
        userLocation,
        gender,
        bio
      );
      res.status(201).json({ results: user });
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UserController();
