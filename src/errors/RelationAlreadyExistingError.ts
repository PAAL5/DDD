import { DomainError } from "./DomainError";

export class RelationAlreadyExistingError extends DomainError {
    constructor() {
        super("The relation already exists.");
    }
}