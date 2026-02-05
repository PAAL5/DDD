export class IdUser {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: IdUser): boolean {
    return this.value === other.getValue();
  }
}
