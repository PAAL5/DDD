export class IdComment {
  public readonly value: number;

  constructor(value: number) {
    this.value = value;
  }

  public equals(other: IdComment): boolean {
    return this.value === other.value;
  }
}
