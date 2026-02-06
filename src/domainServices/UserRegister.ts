import { EventDispatcher } from '../domain-events/EventDispatcher';
import { DomainEvent } from '../domain-events/events/DomainEvent';
import { UserCreated } from '../domain-events/events/UserCreated';
import { User } from '../entities/User';
import { EmailAlreadyUsedError } from '../errors/EmailAlreadyUsedError';
import { UserRepository } from '../repositories/UserRepository';
import { Email } from '../value-objects/Email';
import { UserName } from '../value-objects/UserName';

export class UserRegister {
  private domainEvents: DomainEvent[] = [];
  private EventDispatcher = EventDispatcher.getInstance();

  constructor() {}

  public register(name: UserName, email: Email): User {
    this.emailAlreadyUsed(email);
    const user = User.register(name, email);
    this.registerDomainEvent(new UserCreated(user));
    this.save();
    return user;
  }

  private emailAlreadyUsed(email: Email): void {
    const userRepository = UserRepository.getInstance();
    const existingUser = userRepository.findByEmail(email);
    if (existingUser) {
      throw new EmailAlreadyUsedError();
    }
  }

  public save(): void {
    const events = this.releaseDomainEvents();
    events.forEach((event) => {
      const handler = this.EventDispatcher.dispatch(event);
      handler.handle(event);
    });
  }

  private registerDomainEvent(event: DomainEvent): void {
    this.domainEvents.push(event);
  }

  private releaseDomainEvents(): DomainEvent[] {
    const events = [...this.domainEvents];
    this.domainEvents = [];
    return events;
  }
}
