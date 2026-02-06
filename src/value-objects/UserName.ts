export class UserName {
  public readonly userName: string;

  constructor(userName: string) {
    this.userName = userName;
  }

  public equals(other: UserName): boolean {
    return this.userName === other.userName;
  }
}
