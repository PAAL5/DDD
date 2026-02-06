import { DomainEvent } from 'src/domain-events/events/DomainEvent';

export class DomainEventRepository {
  private static instance: DomainEventRepository;

  private constructor() {}

  public static getInstance(): DomainEventRepository {
    if (!DomainEventRepository.instance) {
      DomainEventRepository.instance = new DomainEventRepository();
    }
    return DomainEventRepository.instance;
  }

  private events: DomainEvent[] = [];

  getAll(): DomainEvent[] {
    return this.events;
  }

  add(event: DomainEvent): void {
    this.events.push(event);
  }
}
