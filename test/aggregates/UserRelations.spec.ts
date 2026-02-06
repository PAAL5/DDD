import { expect, describe, it } from '@jest/globals';
import { UserRelations } from './../../src/aggregates/UserRelations';
import { User } from './../../src/entities/User';
import { Email } from './../../src/value-objects/Email';
import { UserName } from './../../src/value-objects/UserName';

const mockUser1 = User.register(
  new UserName('John Doe'),
  new Email('test@gmail.com'),
);

const mockUser2 = User.register(
  new UserName('Jane Doe'),
  new Email('test2@gmail.com'),
);

describe('Tests on user relations aggregate', () => {
  it('should create a user relation with valid data', () => {
    const userRelations = new UserRelations(mockUser1, [mockUser2.id]);
    expect(userRelations).toBeInstanceOf(UserRelations);
  });

  it('should get the user from user relations', () => {
    const userRelations = new UserRelations(mockUser1, [mockUser2.id]);
    expect(userRelations.getUser()).toBe(mockUser1);
  });

  it('should get the related users id from user relations', () => {
    const userRelations = new UserRelations(mockUser1, [mockUser2.id]);
    expect(userRelations.getRelations()).toEqual([mockUser2.id]);
  });

  it('should add a relation to user relations', () => {
    const userRelations = new UserRelations(mockUser1, [mockUser2.id]);
    const mockUser3 = User.register(
      new UserName('Another User'),
      new Email('another@gmail.com'),
    );
    userRelations.addRelation(mockUser3.id);
    expect(userRelations.getRelations()).toEqual([mockUser2.id, mockUser3.id]);
  });

  it('should not add an already existing relation to user relations', () => {
    const userRelations = new UserRelations(mockUser1, [mockUser2.id]);
    expect(() => userRelations.addRelation(mockUser2.id)).toThrow(
      'The relation already exists.',
    );
  });
});
