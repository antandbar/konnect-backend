'use strict';

import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export = (req: any, res: Response, next: NextFunction) => {
  interface ErrorJwt extends Error {
    status?: number;
  }

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    const err: ErrorJwt = new Error('No token provided');
    err.status = 401;
    next(err);
    return;
  }

  const jwtToken = authHeader.split(' ')[1];

  // Se verifica token
  jwt.verify(
    jwtToken,
    process.env.JWT_SECRET as string,
    (err: any, payload: any) => {
      if (err) {
        const error: ErrorJwt = new Error('invalid token');
        error.status = 401;
        next(error);
        return;
      }
      req.userId = payload.id;
      req.userName = payload.userName;
      req.email = payload.email;

      next();
    },
  );
};
