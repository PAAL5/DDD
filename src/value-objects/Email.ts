export class Email {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  public getEmail(): string {
    return this.email;
  }

  public equals(other: Email): boolean {
    return this.email === other.getEmail();
  }
}
