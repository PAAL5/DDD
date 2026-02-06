export class IdUser {
  public readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  public equals(other: IdUser): boolean {
    return this.value === other.value;
  }
}
