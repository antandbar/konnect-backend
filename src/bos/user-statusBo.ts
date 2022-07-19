'use strict';

import UserStatusSchema, { UserStatus } from '../models/UserStatus';

class UserStatusBo {
  public async getUserStatus(): Promise<UserStatus[]> {
    const topics: UserStatus[] = await UserStatusSchema.findAll();

    return topics;
  }

  public async postUserStatus(data: any): Promise<UserStatus[]> {
    const userStatus: any = await UserStatusSchema.create(data);

    return userStatus;
  }

  public async deleteUserStatus(id: any): Promise<UserStatus[]> {
    const idUserStatus = id.id;
    const user: any = await UserStatusSchema.destroy({
      where: {
        id: idUserStatus,
      },
    });

    return user;
  }
}

export const userStatusBo = new UserStatusBo();
