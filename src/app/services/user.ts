import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(count: number): UserModel[] {
    return faker.helpers.multiple(this.createRandomUser, {
      count: count,
    });
  }

  createRandomUser() {
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
  }
}
