'use strict';

import bcrypt from 'bcrypt';
import UserSchema, { User } from '../models/User';

class LoginsBo {
  public async postJWT(email: any, password: any): Promise<User> {
    interface ErrorJwt extends Error {
      status?: number;
    }

    const user: any = await UserSchema.findOne({
      where: { email: email },
      attributes: {
        exclude: [
          'userName',
          'name',
          'email',
          'bithDate',
          'userLocation',
          'gender',
          'bio',
        ],
      },
    });

    // Se comparan contraseñas
    if (
      !user ||
      !(await bcrypt.compare(password.toString(), user.dataValues.password))
    ) {
      const err: ErrorJwt = new Error('Invalid credentials');
      err.status = 401;
      throw err;
    }

    return user;
  }
}

export const loginsBo = new LoginsBo();
