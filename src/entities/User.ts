import { UserRepository } from 'src/repositories/UserRepository';
import { Email } from 'src/value-objects/Email';
import { IdUser } from 'src/value-objects/IdUser';
import { UserName } from 'src/value-objects/UserName';

export class User {
  public readonly id: IdUser;
  public name: UserName;
  public email: Email;

  private constructor(id: IdUser, name: UserName, email: Email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public static register(id: IdUser, name: UserName, email: Email): User {
    this.emailAlreadyUsed(email);
    return new User(id, name, email);
  }

  private static emailAlreadyUsed(email: Email): void {
    const userRepository = UserRepository.getInstance();
    const existingUser = userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error("Email already used");
    }
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
