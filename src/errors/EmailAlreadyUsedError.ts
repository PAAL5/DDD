import { DomainError } from "./DomainError";

export class EmailAlreadyUsedError extends DomainError {
    constructor() {
        super("The email is already used by another user.");
    }
}