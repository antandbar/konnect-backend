'use strict';

import UserStatusSchema, { UserStatus } from '../models/UserStatus';

class UserStatusBo {
  public async getUserStatus(): Promise<UserStatus[]> {
    const topics: UserStatus[] = await UserStatusSchema.findAll();

    return topics;
  }

  public async postUserStatus(data: any): Promise<UserStatus[]> {
    const userStatus: UserStatus[] = await UserStatusSchema.create(data);

    return userStatus;
  }

  public async putUserStatus(id: any, data:any): Promise<UserStatus[]> {
    const dataSend = {
      statusDescription: data.statusDescription,
    }
    const idUser = id.id;

    const userUpdated = await UserStatusSchema.update(dataSend,{
      where: {
        id: idUser
      }
    });

    if (userUpdated) {
      const user: UserStatus[] = await UserStatusSchema.findAll({id: idUser})
      return user;
    }

    return userUpdated;
  }

  public async deleteUserStatus(id: any): Promise<UserStatus[]> {

    const idUserStatus = id.id;
    const user: UserStatus[] = await UserStatusSchema.destroy({
      where: {
        id: idUserStatus
      }
    });

    return user;
  }
}

export const userStatusBo = new UserStatusBo();