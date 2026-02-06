import { expect, describe, it } from '@jest/globals';
import { CodeBlockRepository } from '../../src/repositories/CodeBlockRepository';
import { User } from '../../src/entities/User';
import { UserName } from '../../src/value-objects/UserName';
import { Email } from '../../src/value-objects/Email';
import { CodeBlock } from '../../src/entities/CodeBlock';
import { CodeBlockContent } from '../../src/value-objects/CodeBlockContent';

const mockUser = User.register(
  new UserName('John Doe'),
  new Email('test@gmail.com'),
);

const mockCodeBlock = new CodeBlock(
  mockUser,
  new CodeBlockContent('console.log("Hello, world!");'),
);

describe('CodeBlockRepository', () => {
  it('should be a singleton', () => {
    const repo1 = CodeBlockRepository.getInstance();
    const repo2 = CodeBlockRepository.getInstance();
    expect(repo1).toBe(repo2);
  });

  it('should add and retrieve code blocks', () => {
    const repo = CodeBlockRepository.getInstance();
    expect(repo.getAll()).toEqual([]);
    repo.save(mockCodeBlock);
    const codeBlocks = repo.getAll();
    expect(codeBlocks).toContain(mockCodeBlock);
  });
});
