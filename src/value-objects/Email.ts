import { InvalidEmailError } from './../errors/InvalidEmailError';

export class Email {
  public readonly email: string;

  constructor(email: string) {
    this.isValidEmail(email);
    this.email = email;
  }

  private isValidEmail(email: string): void {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new InvalidEmailError(email);
    }
  }

  public equals(other: Email): boolean {
    return this.email === other.email;
  }
}
