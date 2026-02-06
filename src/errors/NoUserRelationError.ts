import { DomainError } from "./DomainError";

export class NoUserRelationError extends DomainError {
    constructor() {
        super("No user relation found with the requested user.");
    }
}