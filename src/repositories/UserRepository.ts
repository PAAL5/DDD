import { User } from 'src/entities/User';
import { Email } from 'src/value-objects/Email';
import { IdUser } from 'src/value-objects/IdUser';

export class UserRepository {
  private users: User[] = [];

  getAll(): User[] {
    return this.users;
  }

  findById(id: IdUser): User | null {
    const user = this.users.find((usr) => usr.id.equals(id));
    return user || null;
  }

  findByEmail(email: Email): User | null {
    const user = this.users.find((usr) => usr.email.equals(email));
    return user || null;
  }

  add(user: User): void {
    this.users.push(user);
  }

  update(user: User): void {
    const index = this.users.findIndex((usr) => usr.id.equals(user.id));
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  delete(id: IdUser): void {
    this.users = this.users.filter((usr) => !usr.id.equals(id));
  }
}
