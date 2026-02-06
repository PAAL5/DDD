import { DomainEvent } from "../events/DomainEvent";

export abstract class DomainEventHandler {
    constructor () {}
    abstract handle(event: DomainEvent): void;
}