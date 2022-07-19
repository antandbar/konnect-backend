'use strict';

import UserSchema, { User } from '../models/User';

class LoginsBo {
  public async postJWT(email: any, password: any): Promise<User[]> {
    const user: any = await UserSchema.findAll({ where: { email: email } });

    return user;
  }
}

export const loginsBo = new LoginsBo();
