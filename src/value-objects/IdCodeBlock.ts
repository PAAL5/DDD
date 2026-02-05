export class IdCodeBlock {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: IdCodeBlock): boolean {
    return this.value === other.getValue();
  }
}
