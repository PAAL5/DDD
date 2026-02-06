import { DomainError } from "./DomainError";

export class CommentNotExistingError extends DomainError {
    constructor() {
        super("The comment does not exist.");
    }
}