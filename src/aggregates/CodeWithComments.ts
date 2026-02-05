import { CodeBlock } from 'src/entities/CodeBlock';
import { Comment } from 'src/entities/Comment';
import { Id } from 'src/value-objects/Id';

export class CodeWithComments {
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
    return this.comments;
  }

  public addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  public findCommentById(commentId: Id): Comment | undefined {
    return this.comments.find((comment) => comment.getId() === commentId);
  }
}
