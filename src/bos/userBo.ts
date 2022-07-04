'use strict';

import UserSchema, { User } from '../models/User';

class UserBo {
  public async getUser(): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll();

    return topics;
  }
}

export const userBo = new UserBo();