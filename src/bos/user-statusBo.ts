'use strict';

import UserStatusSchema, { UserStatus } from '../models/UserStatus';

class UserStatusBo {
  public async getUserStatus(): Promise<UserStatus[]> {
    const topics: UserStatus[] = await UserStatusSchema.findAll();

    return topics;
  }
}

export const userStatusBo = new UserStatusBo();