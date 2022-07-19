'use strict';

import UserSchema, { User } from '../models/User';

class UserBo {
  public async getUser(): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll();

    return topics;
  }

  public async getUserDetail(id: any): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll({
      where: { id: id },
    });

    return topics;
  }

  public async postUser(data: any): Promise<User[]> {
    const user: any = await UserSchema.create(data);

    return user;
  }
}

export const userBo = new UserBo();
