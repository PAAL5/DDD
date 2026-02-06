import { EventDispatcher } from "src/domain-events/EventDispatcher";
import { CodeBlockPublished } from "src/domain-events/events/CodeBlockPublished";
import { DomainEvent } from "src/domain-events/events/DomainEvent";
import { CodeBlock } from "src/entities/CodeBlock";
import { User } from "src/entities/User";
import { UserRepository } from "src/repositories/UserRepository";
import { CodeBlockContent } from "src/value-objects/CodeBlockContent";
import { IdUser } from "src/value-objects/IdUser";


export class CodePublication {
    private events: DomainEvent[] = [];

    publishCode(userId: IdUser, code: CodeBlockContent): void {
        const codeBlock = new CodeBlock(userId, code);
        const event = new CodeBlockPublished(codeBlock);
        this.addEvent(event);
        this.save();
    }

    private save(): void {
        const events = this.releaseEvents();
        const eventDispatcher = EventDispatcher.getInstance();
        events.forEach((event) => {
            eventDispatcher.dispatch(event);
        });
    }

    private addEvent(event: DomainEvent): void {
        this.events.push(event);
    }

    public releaseEvents(): DomainEvent[] {
        const events = [...this.events];
        this.events = [];
        return events;
    }
}