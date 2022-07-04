'use strict';

import { Request, Response } from 'express';
import { UserStatus } from '../models/UserStatus';
import { userStatusBo } from '../bos/user-statusBo'

class UserStatusController {
  public async getUserStatus(req: Request, res: Response): Promise<void> {
    const userStatus: UserStatus[] = await userStatusBo.getUserStatus();
    res.status(200).json({ results: userStatus });
  }

}

export const userStatusController = new UserStatusController();