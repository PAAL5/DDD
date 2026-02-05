export class IdComment {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: IdComment): boolean {
    return this.value === other.getValue();
  }
}
