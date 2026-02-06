export class IdCodeBlock {
  public readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  public equals(other: IdCodeBlock): boolean {
    return this.value === other.value;
  }
}
