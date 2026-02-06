import { expect, describe, it } from '@jest/globals';
import { User } from './../../src/entities/User';
import { Email } from './../../src/value-objects/Email';
import { UserName } from './../../src/value-objects/UserName';
import { Comment } from './../../src/entities/Comment';
import { CommentMessage } from './../../src/value-objects/CommentMessage';
import { IdCodeBlock } from './../../src/value-objects/IdCodeBlock';

describe('Tests on comment entity', () => {
  it('should create a comment with valid data', () => {
    const user = User.register(
      new UserName('John Doe'),
      new Email('test@gmail.com'),
    );
    const idCodeBlock = new IdCodeBlock(1);
    const content = new CommentMessage('This is a comment');
    const comment = new Comment(idCodeBlock, user, content);

    expect(comment.id.value).toBe(1);
    expect(comment.idCodeBlock.value).toBe(1);
    expect(comment.author).toBe(user);
    expect(comment.content.commentMessage).toBe('This is a comment');
  });

  it('should consider two comments with the same id as equal', () => {
    const user = User.register(
      new UserName('John Doe'),
      new Email('test2@gmail.com'),
    );

    const idCodeBlock = new IdCodeBlock(1);
    const content = new CommentMessage('This is another comment');
    const comment = new Comment(idCodeBlock, user, content);

    expect(comment.equals(comment)).toBe(true);
  });
});
