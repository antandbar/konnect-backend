'use strict';

import { Request, Response } from 'express';
import { User } from '../models/User';
import { userBo } from '../bos/userBo'

class UserController {
  public async getUser(req: Request, res: Response): Promise<void> {
    const location: User[] = await userBo.getUser();
    res.status(200).json({ results: location });
  }

}

export const userController = new UserController();