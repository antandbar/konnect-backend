'use strict';

import { Request, Response } from 'express';
import { UserStatus } from '../models/UserStatus';
import { userStatusBo } from '../bos/user-statusBo';

class UserStatusController {
  public async getUserStatus(req: Request, res: Response): Promise<void> {
    const userStatus: UserStatus[] = await userStatusBo.getUserStatus();
    res.status(200).json({ results: userStatus });
  }

  public async postUserStatus(req: Request, res: Response): Promise<void> {
    const data = req.body;

    const userStatus: UserStatus[] = await userStatusBo.postUserStatus(data);
    res.status(200).json({ results: userStatus });
  }

  /*   public async putUserStatus(req: Request, res: Response): Promise<void> {
    const data: object = {
      statusDescription: req.body.statusDescription,
    }
    const userStatus: UserStatus[] = await userStatusBo.putUserStatus(req.params, data);
    res.status(200).json({ results: userStatus });
  } */

  public async deleteUserStatus(req: Request, res: Response): Promise<void> {
    const userStatus: UserStatus[] = await userStatusBo.deleteUserStatus(
      req.params,
    );
    res.status(200).json({ results: userStatus });
  }
}

export const userStatusController = new UserStatusController();
