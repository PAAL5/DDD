import { expect, describe, it } from '@jest/globals';
import { DomainEventRepository } from '../../src/repositories/DomainEventRepository';
import { UserCreated } from '../../src/domain-events/events/UserCreated';
import { Email } from '../../src/value-objects/Email';
import { User } from '../../src/entities/User';
import { UserName } from '../../src/value-objects/UserName';

const mockUser = User.register(
  new UserName('John Doe'),
  new Email('john.doe@example.com'),
);

describe('DomainEventRepository', () => {
  it('should be a singleton', () => {
    const repo1 = DomainEventRepository.getInstance();
    const repo2 = DomainEventRepository.getInstance();
    expect(repo1).toBe(repo2);
  });

  it('should add and retrieve events', () => {
    const repo = DomainEventRepository.getInstance();
    expect(repo.getAll()).toEqual([]);
    const event = new UserCreated(mockUser);
    repo.add(event);
    const events = repo.getAll();
    expect(events).toContain(event);
  });
});
