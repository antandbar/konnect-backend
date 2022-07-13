'use strict';

import UserSchema, { User } from '../models/User';

class UserBo {
  public async getUser(): Promise<User[]> {
    const topics: User[] = await UserSchema.findAll();

    return topics;
  }

  public async postUser(data: any): Promise<User[]> {

    const user: any = await UserSchema.create(data);

    return user;
  }

/*   public async putUser(id:any, data: any): Promise<User[]> {

    const dataSend = {
      userName: data.userName,
      name: data.name,
      email: data.email,
      password: data.password,
      userLocation: data.userLocation,
      gender: data.gender,
      bio: data.bio
    }
    const idUser = id.id;

    const userUpdated = await UserSchema.update(dataSend,{
      where: {
        id: idUser
      }
    });

    if (userUpdated) {
      const user: User[] = await UserSchema.findAll({id: idUser})
      return user;
    }

    return userUpdated;

  } */


/*   public async deletetUser(idUser: any): Promise<User[]> {
    const { id } = idUser;
    console.log(id)
    const user: User[] = await UserSchema.destroy({
      where: {
        id: id
      }
    });

    return user;
  } */
}

export const userBo = new UserBo();