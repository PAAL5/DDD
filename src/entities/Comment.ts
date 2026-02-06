import { IdComment } from './../value-objects/IdComment';
import { CommentMessage } from './../value-objects/CommentMessage';
import { IdCodeBlock } from './../value-objects/IdCodeBlock';
import { IdUser } from 'src/value-objects/IdUser';

export class Comment {
  public readonly id: IdComment;
  public readonly idCodeBlock: IdCodeBlock;
  public readonly author: IdUser;
  public content: CommentMessage;

  private static lastId: number = 0;

  constructor(
    idCodeBlock: IdCodeBlock,
    author: IdUser,
    content: CommentMessage,
  ) {
    this.id = Comment.generateId();
    this.idCodeBlock = idCodeBlock;
    this.author = author;
    this.content = content;
  }

  private static generateId(): IdComment {
    return new IdComment(++this.lastId);
  }

  public equals(other: Comment): boolean {
    return this.id.equals(other.id);
  }
}
