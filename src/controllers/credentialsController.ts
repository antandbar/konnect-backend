'use strict';

import { Response, NextFunction } from 'express';

class CredentialsController {
  // Se recuperan datos de usuario
  public async getCredentials(
    req: any,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const credentials = {
        userId: req.userId,
        userName: req.userName,
        email: req.email
      };
      res.status(200).json({ result: credentials });
    } catch (error) {
      next(error);
    }
  }
}

export const credentialsController = new CredentialsController();
