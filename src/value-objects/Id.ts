export class Id {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    public getValue(): number {
        return this.value;
    }

    public equals(other: Id): boolean {
        return this.value === other.getValue();
    }
}