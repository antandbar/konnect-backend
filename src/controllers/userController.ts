'use strict';

import { Request, Response } from 'express';
import { User } from '../models/User';
import { userBo } from '../bos/userBo';

class UserController {
  public async getUser(req: Request, res: Response): Promise<void> {
    const location: User[] = await userBo.getUser();
    res.status(200).json({ results: location });
  }

  public async postUser(req: Request, res: Response): Promise<void> {
    const data: object = {
      userName: req.body.userName,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      bithDate: req.body.bithDate,
      userLocation: req.body.userLocation,
      gender: req.body.gender,
      bio: req.body.bio,
    };
    const location: User[] = await userBo.postUser(data);
    res.status(200).json({ results: location });
  }

  /*   public async putUser(req: Request, res: Response): Promise<void> {
    const id = req.params;

    const data: object = {
      userName: req.body.userName,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      bithDate: req.body.bithDate,
      userLocation: req.body.userLocation,
      gender: req.body.gender,
      bio: req.body.bio
    }
    const location: User[] = await userBo.putUser(id, data);
    res.status(200).json({ results: location });
  } */

  /*   public async deleteUser(req: Request, res: Response): Promise<void> {
    const user: User[] = await userBo.deletetUser(req.params);
    res.status(200).json({ results: user });
  } */
}

export const userController = new UserController();
