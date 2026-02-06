import { UnknownDomainEventError } from "../errors/UnknownDomainEvent";
import { DomainEvent } from "./events/DomainEvent";
import { UserCreated } from "./events/UserCreated";
import { DomainEventHandler } from "./handlers/DomainEventHandler";
import { UserCreatedHandler } from "./handlers/UserCreatedhandler";

export class EventDispatcher {
    private static instance: EventDispatcher;
    
    private constructor () {}

    public static getInstance(): EventDispatcher {
        if (!EventDispatcher.instance) {
            EventDispatcher.instance = new EventDispatcher();
        }
        return EventDispatcher.instance;
    }

    public dispatch(event: DomainEvent): DomainEventHandler {
        if(event instanceof UserCreated) return new UserCreatedHandler();
        throw new UnknownDomainEventError();
    }
}