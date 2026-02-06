import { Email } from '../value-objects/Email';
import { IdUser } from '../value-objects/IdUser';
import { UserName } from '../value-objects/UserName';

export class User {
  public readonly id: IdUser;
  public name: UserName;
  public email: Email;

  private static lastId: number = 0;

  public constructor(id: IdUser, name: UserName, email: Email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public static register(name: UserName, email: Email): User {
    return new User(this.generateId(), name, email);
  }

  private static generateId(): IdUser {
    return new IdUser(++this.lastId);
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
