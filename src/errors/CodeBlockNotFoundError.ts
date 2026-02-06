import { DomainError } from "./DomainError";

export class CodeBlockNotFoundError extends DomainError {
    constructor() {
        super("The code block was not found.");
    }
}