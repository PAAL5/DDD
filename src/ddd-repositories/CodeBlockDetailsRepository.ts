import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';
import { CodeBlock } from './../entities/CodeBlock';
import { CodeBlockRepository } from './../repositories/CodeBlockRepository';
import { CommentRepository } from './../repositories/CommentRepository';
import { CodeBlockDetails } from 'src/aggregates/CodeBlockDetails';
import { Comment } from 'src/entities/Comment';

export class CodeBlockDetailsRepository {
  private static instance: CodeBlockDetailsRepository;
  private codeBlockRepo: CodeBlockRepository;
  private commentRepo: CommentRepository;

  private constructor() {
    this.codeBlockRepo = CodeBlockRepository.getInstance();
    this.commentRepo = CommentRepository.getInstance();
  }

  public static getInstance(): CodeBlockDetailsRepository {
    if (!CodeBlockDetailsRepository.instance) {
      CodeBlockDetailsRepository.instance = new CodeBlockDetailsRepository();
    }
    return CodeBlockDetailsRepository.instance;
  }

  getAllCodeBlock(): CodeBlock[] {
    return this.codeBlockRepo.getAll();
  }

  getCodeBlock(id: IdCodeBlock): CodeBlock | null {
    return this.codeBlockRepo.findById(id);
  }

  getCodeBlockDetails(id: IdCodeBlock): CodeBlockDetails | null {
    const codeBlock = this.codeBlockRepo.findById(id);
    if (!codeBlock) {
      return null;
    }
    const comments = this.commentRepo.findAllCommentsByCodeBlockId(id);
    return new CodeBlockDetails(codeBlock, comments);
  }

  addCodeBlock(codeBlock: CodeBlock): void {
    this.codeBlockRepo.save(codeBlock);
  }

  addCodeBlockComment(comment: Comment): void {
    this.commentRepo.save(comment);
  }
}
