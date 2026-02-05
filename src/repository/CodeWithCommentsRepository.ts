import { CodeWithComments } from 'src/aggregates/CodeWithComments';
import { CodeBlock } from 'src/entities/CodeBlock';
import { Comment } from 'src/entities/Comment';

export class CodeWithCommentsRepository {
  private codeWithComments: CodeWithComments[] = [];

  getAll(): CodeWithComments[] {
    return this.codeWithComments;
  }

  getCommentsFromCodeBlock(codeBlockId: number): Comment[] {
    const codeWithComments = this.codeWithComments.find(
      (cwc) => cwc.getCodeBlock().getId().getValue() === codeBlockId,
    );
    return codeWithComments ? codeWithComments.getComments() : [];
  }

  findCodeBlockById(codeBlockId: number): CodeBlock | null {
    const codeWithComments = this.codeWithComments.find(
      (cwc) => cwc.getCodeBlock().getId().getValue() === codeBlockId,
    );
    return codeWithComments ? codeWithComments.getCodeBlock() : null;
  }

  findCodeBlockWithComments(codeBlockId: number): CodeWithComments | null {
    const codeWithComments = this.codeWithComments.find(
      (cwc) => cwc.getCodeBlock().getId().getValue() === codeBlockId,
    );
    return codeWithComments || null;
  }

  addCodeBlock(codeBlock: CodeBlock) {
    const newCodeWithComments = new CodeWithComments(codeBlock);
    this.codeWithComments.push(newCodeWithComments);
  }

  addCommentToCodeBlock(codeBlockId: number, comment: Comment): void {
    const codeWithComments = this.findCodeBlockWithComments(codeBlockId);
    if (codeWithComments) {
      codeWithComments.addComment(comment);
    }
  }

  findCommentById(codeBlockId: number, commentId: number): Comment | null {
    const codeBlock = this.findCodeBlockWithComments(codeBlockId);
    if (codeBlock) {
      const comment = codeBlock
        .getComments()
        .find((c) => c.getId().getValue() === commentId);
      return comment || null;
    }
    return null;
  }
}
