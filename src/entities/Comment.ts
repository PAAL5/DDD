import { User } from './User';
import { IdComment } from 'src/value-objects/IdComment';
import { CommentMessage } from 'src/value-objects/CommentMessage';

export class Comment {
  public readonly id: IdComment;
  public readonly author: User;
  public content: CommentMessage;

  constructor(id: IdComment, author: User, content: CommentMessage) {
    this.id = id;
    this.author = author;
    this.content = content;
  }

  public equals(other: Comment): boolean {
    return this.id.equals(other.id);
  }
}
