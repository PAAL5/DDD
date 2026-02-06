import { expect, describe, it } from '@jest/globals';
import { CodeBlock } from './../../src/entities/CodeBlock';
import { User } from './../../src/entities/User';
import { CodeBlockContent } from './../../src/value-objects/CodeBlockContent';
import { Email } from './../../src/value-objects/Email';
import { UserName } from './../../src/value-objects/UserName';

describe('Tests on code block entity', () => {
  it('should create a code block with valid data', () => {
    const user = User.register(
      new UserName('John Doe'),
      new Email('test@gmail.com'),
    );
    const content = new CodeBlockContent('console.log("Hello, world!");');

    const codeBlock = new CodeBlock(user, content);
    expect(codeBlock.id.value).toBe(1);
    expect(codeBlock.author).toBe(user);
    expect(codeBlock.content.codeBlockContent).toBe(
      'console.log("Hello, world!");',
    );
  });

  it('should consider two code blocks with the same id as equal', () => {
    const user = User.register(
      new UserName('John Doe'),
      new Email('test2@gmail.com'),
    );
    const content = new CodeBlockContent('console.log("Hello, world!");');

    const codeBlock = new CodeBlock(user, content);
    expect(codeBlock.equals(codeBlock)).toBe(true);
  });
});
