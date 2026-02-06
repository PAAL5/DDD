import { DomainError } from "./DomainError";

export class UnknownDomainEventError extends DomainError {
    constructor() {
        super(`Unknown domain event received.`);
    }
}