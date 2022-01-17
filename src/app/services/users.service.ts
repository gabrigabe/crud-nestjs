import { Injectable } from '@nestjs/common';
import { User } from '../entities/Users';
import { randomUUID } from 'crypto';

@Injectable()
export class AppService {
  private users: User[] = [];
  getAll(): Array<User> {
    return this.users;
  }

  getOne(id: string): User {
    const user = this.users.find((user: User) => user.id === id);
    return user;
  }

  create({ name }: User): User {
    const newUser = {
      id: randomUUID(),
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
  update({ id, name }: User): void {
    const userToUpdate = this.users.findIndex((user) => user.id === id);
    this.users[userToUpdate] = {
      id: id,
      name,
    };
  }
  delete(id: string) {
    const userToDelete = this.users.findIndex((user) => user.id === id);
    return this.users.splice(userToDelete);
  }
}
