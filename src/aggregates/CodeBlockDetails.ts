import { CodeBlock } from 'src/entities/CodeBlock';
import { Comment } from 'src/entities/Comment';
import { CommentNotExistingError } from 'src/errors/CommentNotExistingError';
import { IdComment } from 'src/value-objects/IdComment';

export class CodeBlockDetails {
  private codeBlock: CodeBlock;
  private comments: Comment[];
  constructor(codeBlock: CodeBlock, comments: Comment[] = []) {
    this.codeBlock = codeBlock;
    this.comments = comments;
  }

  public getCodeBlock(): CodeBlock {
    return this.codeBlock;
  }

  public getComments(): Comment[] {
    return [...this.comments];
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  public findCommentById(commentId: IdComment): Comment | undefined {
    this.commentExists(commentId);
    return this.comments.find((comment) => comment.id.equals(commentId));
  }

  private commentExists(commentId: IdComment): void {
    if (!this.findCommentById(commentId)) {
      throw new CommentNotExistingError();
    }
  }

}
