import { expect, describe, it } from '@jest/globals';
import { CodeBlockDetails } from './../../src/aggregates/CodeBlockDetails';
import { CommentMessage } from './../../src/value-objects/CommentMessage';
import { User } from './../../src/entities/User';
import { Email } from './../../src/value-objects/Email';
import { CodeBlockContent } from './../../src/value-objects/CodeBlockContent';
import { CodeBlock } from './../../src/entities/CodeBlock';
import { UserName } from './../../src/value-objects/UserName';
import { Comment } from './../../src/entities/Comment';

const mockUser = User.register(
  new UserName('John Doe'),
  new Email('test@gmail.com'),
);

const mockCodeBlock = new CodeBlock(
  mockUser.id,
  new CodeBlockContent('console.log("Hello, world!");'),
);

const mockComment = new Comment(
  mockCodeBlock.id,
  mockUser.id,
  new CommentMessage('This is a comment'),
);

const mockComment2 = new Comment(
  mockCodeBlock.id,
  mockUser.id,
  new CommentMessage('This is another comment'),
);

describe('Tests on CodeBlockDetails aggregate', () => {
  it('should create a CodeBlockDetails with valid data', () => {
    const codeBlockDetails = new CodeBlockDetails(mockCodeBlock, [mockComment]);
    expect(codeBlockDetails).toBeInstanceOf(CodeBlockDetails);
  });

  it('should get the code block from CodeBlockDetails', () => {
    const codeBlockDetails = new CodeBlockDetails(mockCodeBlock, [mockComment]);
    expect(codeBlockDetails.getCodeBlock()).toBe(mockCodeBlock);
  });

  it('should get the comments from CodeBlockDetails', () => {
    const codeBlockDetails = new CodeBlockDetails(mockCodeBlock, [mockComment]);
    expect(codeBlockDetails.getComments()).toEqual([mockComment]);
  });

  it('should add a comment to CodeBlockDetails', () => {
    const codeBlockDetails = new CodeBlockDetails(mockCodeBlock, [mockComment]);
    codeBlockDetails.addComment(mockComment2);
    expect(codeBlockDetails.getComments()).toEqual([mockComment, mockComment2]);
  });

  it('should find a comment by id in CodeBlockDetails', () => {
    const codeBlockDetails = new CodeBlockDetails(mockCodeBlock, [
      mockComment,
      mockComment2,
    ]);
    const foundComment = codeBlockDetails.findCommentById(mockComment.id);
    expect(foundComment).toBe(mockComment);
  });
});
