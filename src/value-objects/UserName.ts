export class UserName {
  private userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  public getUserName(): string {
    return this.userName;
  }

  public equals(other: UserName): boolean {
    return this.userName === other.getUserName();
  }
}
