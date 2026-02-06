import { DomainEventRepository } from '../repositories/DomainEventRepository';
import { CommentCreated } from './events/CommentCreated';
import { DomainEvent } from './events/DomainEvent';
import { UserCreated } from './events/UserCreated';
import { CommentCreatedHandler } from './handlers/CommentCreatedHandler';
import { DomainEventHandler } from './handlers/DomainEventHandler';
import { UserCreatedHandler } from './handlers/UserCreatedhandler';
import { UnknownDomainEventError } from '../errors/UnknownDomainEvent';
import { CodeBlockPublished } from './events/CodeBlockPublished';
import { CodeBlockPublishedHandler } from './handlers/CodeBlockPublishedHandler';

export class EventDispatcher {
  private static instance: EventDispatcher;
  private domainEventRepository: DomainEventRepository =
    DomainEventRepository.getInstance();

  private constructor() {}

  public static getInstance(): EventDispatcher {
    if (!EventDispatcher.instance) {
      EventDispatcher.instance = new EventDispatcher();
    }
    return EventDispatcher.instance;
  }

  public dispatch(event: DomainEvent): DomainEventHandler {
    let handler: DomainEventHandler | null = null;
    if (event instanceof UserCreated) handler = new UserCreatedHandler();
    if (event instanceof CommentCreated) handler = new CommentCreatedHandler();
    if (event instanceof CodeBlockPublished)
      handler = new CodeBlockPublishedHandler();
    this.domainEventRepository.add(event);
    if (handler == null) throw new UnknownDomainEventError();
    return handler;
  }
}
