import { expect, describe, it } from '@jest/globals';
import { UserRepository } from '../../src/repositories/UserRepository';
import { User } from '../../src/entities/User';
import { UserName } from '../../src/value-objects/UserName';
import { Email } from '../../src/value-objects/Email';

const mockUser = User.register(
  new UserName('John Doe'),
  new Email('test@gmail.com'),
);

describe('UserRepository', () => {
  it('should be a singleton', () => {
    const repo1 = UserRepository.getInstance();
    const repo2 = UserRepository.getInstance();
    expect(repo1).toBe(repo2);
  });

  it('should add and retrieve users', () => {
    const repo = UserRepository.getInstance();
    expect(repo.getAll()).toEqual([]);
    repo.add(mockUser);
    const users = repo.getAll();
    expect(users).toContain(mockUser);
  });
});
