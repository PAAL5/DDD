import { User } from './User';
import { IdComment } from 'src/value-objects/IdComment';
import { CommentMessage } from 'src/value-objects/CommentMessage';

export class Comment {
  private id: IdComment;
  private author: User;
  private content: CommentMessage;

  constructor(id: IdComment, author: User, content: CommentMessage) {
    this.id = id;
    this.author = author;
    this.content = content;
  }

  public getId(): IdComment {
    return this.id;
  }
  public getAuthor(): User {
    return this.author;
  }

  public getContent(): CommentMessage {
    return this.content;
  }

  public setContent(content: CommentMessage): void {
    this.content = content;
  }

  public equals(other: Comment): boolean {
    return this.id.equals(other.getId());
  }
}
