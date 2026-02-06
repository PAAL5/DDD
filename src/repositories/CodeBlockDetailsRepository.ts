import { CodeBlockDetails } from '../aggregates/CodeBlockDetails';
import { CodeBlock } from 'src/entities/CodeBlock';
import { Comment } from 'src/entities/Comment';

export class CodeBlockDetailsRepository {
  private CodeBlockDetails: CodeBlockDetails[] = [];

  getAll(): CodeBlockDetails[] {
    return this.CodeBlockDetails;
  }

  getCommentsFromCodeBlock(codeBlockId: number): Comment[] {
    const CodeBlockDetails = this.CodeBlockDetails.find(
      (cwc) => cwc.getCodeBlock().id.value === codeBlockId,
    );
    return CodeBlockDetails ? CodeBlockDetails.getComments() : [];
  }

  findCodeBlockById(codeBlockId: number): CodeBlock | null {
    const CodeBlockDetails = this.CodeBlockDetails.find(
      (cwc) => cwc.getCodeBlock().id.value === codeBlockId,
    );
    return CodeBlockDetails ? CodeBlockDetails.getCodeBlock() : null;
  }

  findCodeBlockWithComments(codeBlockId: number): CodeBlockDetails | null {
    const CodeBlockDetails = this.CodeBlockDetails.find(
      (cwc) => cwc.getCodeBlock().id.value === codeBlockId,
    );
    return CodeBlockDetails || null;
  }

  addCodeBlock(codeBlock: CodeBlock) {
    const newCodeBlockDetails = new CodeBlockDetails(codeBlock);
    this.CodeBlockDetails.push(newCodeBlockDetails);
  }

  addCommentToCodeBlock(codeBlockId: number, comment: Comment): void {
    const CodeBlockDetails = this.findCodeBlockWithComments(codeBlockId);
    if (CodeBlockDetails) {
      CodeBlockDetails.addComment(comment);
    }
  }

  findCommentById(codeBlockId: number, commentId: number): Comment | null {
    const codeBlock = this.findCodeBlockWithComments(codeBlockId);
    if (codeBlock) {
      const comment = codeBlock
        .getComments()
        .find((c) => c.id.value === commentId);
      return comment || null;
    }
    return null;
  }
}
