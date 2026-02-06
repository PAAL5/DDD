import { UserRepository } from '../repositories/UserRepository';
import { Email } from '../value-objects/Email';
import { IdUser } from '../value-objects/IdUser';
import { UserName } from '../value-objects/UserName';

export class User {
  public readonly id: IdUser;
  public name: UserName;
  public email: Email;
  private static userRepository: UserRepository = UserRepository.getInstance();

  private static lastId: number = 0;

  private constructor(id: IdUser, name: UserName, email: Email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public static register(name: UserName, email: Email): User {
    this.emailAlreadyUsed(email);
    this.userRepository.add(new User(this.generateId(), name, email));
    return new User(this.generateId(), name, email);
  }

  private static generateId(): IdUser {
    return new IdUser(++this.lastId);
  }

  private static emailAlreadyUsed(email: Email): void {
    const existingUser = this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Email already used');
    }
  }

  public equals(other: User): boolean {
    return this.id.equals(other.id);
  }
}
