'use strict';

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { loginsBo } from '../bos/loginsBo';

class LoginsController {
  public async postJWT(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const { email, password } = req.body;
      const user: any = await loginsBo.postJWT(email, password);

      // Se genera token
      jwt.sign(
        { id: user.dataValues.id, userName: user.dataValues.userName, email: user.dataValues.email },
        process.env.JWT_SECRET as string,
        {
          expiresIn: '2d',
        },
        (err, jwtToken) => {
          if (err) {
            next(err);
            return;
          }
          res.status(200).json({ token: jwtToken });
        },
      );
    } catch (error) {
      next(error);
    }
  }
}

export const loginsController = new LoginsController();
