import { Email } from 'src/value-objects/Email';
import { IdUser } from 'src/value-objects/IdUser';
import { UserName } from 'src/value-objects/UserName';

export class User {
  private id: IdUser;
  private name: UserName;
  private email: Email;
  constructor(id: IdUser, name: UserName, email: Email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public getId(): IdUser {
    return this.id;
  }

  public getName(): UserName {
    return this.name;
  }

  public getEmail(): Email {
    return this.email;
  }

  public setName(name: UserName): void {
    this.name = name;
  }

  public setEmail(email: Email): void {
    this.email = email;
  }

  public equals(other: User): boolean {
    return this.id.equals(other.getId());
  }
}
