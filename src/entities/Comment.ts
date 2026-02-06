import { User } from './User';
import { IdComment } from 'src/value-objects/IdComment';
import { CommentMessage } from 'src/value-objects/CommentMessage';
import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';

export class Comment {
  public readonly id: IdComment;
  public readonly idCodeBlock: IdCodeBlock;
  public readonly author: User;
  public content: CommentMessage;

  constructor(
    id: IdComment,
    idCodeBlock: IdCodeBlock,
    author: User,
    content: CommentMessage,
  ) {
    this.id = id;
    this.idCodeBlock = idCodeBlock;
    this.author = author;
    this.content = content;
  }

  public equals(other: Comment): boolean {
    return this.id.equals(other.id);
  }
}
