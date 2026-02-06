import { Email } from 'src/value-objects/Email';
import { IdUser } from 'src/value-objects/IdUser';
import { UserName } from 'src/value-objects/UserName';

export class User {
  public readonly id: IdUser;
  public name: UserName;
  public email: Email;
  constructor(id: IdUser, name: UserName, email: Email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
