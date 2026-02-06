import { InvalidEmailError } from "src/errors/InvalidEmailError";

export class Email {
  private email: string;

  constructor(email: string) {
    this.isValidEmail(email);
    this.email = email;
  }

  private isValidEmail(email: string): void {
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new InvalidEmailError(email);
    }
  }

  public getEmail(): string {
    return this.email;
  }

  public equals(other: Email): boolean {
    return this.email === other.getEmail();
  }
}
