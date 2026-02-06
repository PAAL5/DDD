import { expect, describe, it } from '@jest/globals';
import { CommentRepository } from '../../src/repositories/CommentRepository';
import { User } from '../../src/entities/User';
import { UserName } from '../../src/value-objects/UserName';
import { Email } from '../../src/value-objects/Email';
import { CodeBlock } from '../../src/entities/CodeBlock';
import { CodeBlockContent } from '../../src/value-objects/CodeBlockContent';
import { CommentMessage } from '../../src/value-objects/CommentMessage';
import { Comment } from '../../src/entities/Comment';

const mockUser = User.register(
  new UserName('John Doe'),
  new Email('test@gmail.com'),
);

const mockCodeBlock = new CodeBlock(
  mockUser,
  new CodeBlockContent('console.log("Hello, world!");'),
);

const mockComment = new Comment(
  mockCodeBlock.id,
  mockUser,
  new CommentMessage('This is a comment'),
);

describe('CommentRepository', () => {
  it('should be a singleton', () => {
    const repo1 = CommentRepository.getInstance();
    const repo2 = CommentRepository.getInstance();
    expect(repo1).toBe(repo2);
  });

  it('should add and retrieve code blocks', () => {
    const repo = CommentRepository.getInstance();
    expect(repo.getAll()).toEqual([]);
    repo.add(mockComment);
    const comments = repo.getAll();
    expect(comments).toContain(mockComment);
  });
});
