import { IdComment } from 'src/value-objects/IdComment';
import { Comment } from 'src/entities/Comment';
import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';

export class CommentRepository {
  private comments: Comment[] = [];

  private static instance: CommentRepository;

  private constructor() {}

  public static getInstance(): CommentRepository {
    if (!CommentRepository.instance) {
      CommentRepository.instance = new CommentRepository();
    }
    return CommentRepository.instance;
  }

  getAll(): Comment[] {
    return this.comments;
  }

  findById(id: IdComment): Comment | null {
    const comment = this.comments.find((c) => c.id.equals(id));
    return comment || null;
  }

  findAllCommentsByCodeBlockId(idCodeBlock: IdCodeBlock): Comment[] {
    return this.comments.filter((c) => c.idCodeBlock.equals(idCodeBlock));
  }

  add(comment: Comment): void {
    this.comments.push(comment);
  }

  update(comment: Comment): void {
    const index = this.comments.findIndex((c) => c.equals(comment));
    if (index !== -1) {
      this.comments[index] = comment;
    }
  }

  delete(id: IdComment): void {
    this.comments = this.comments.filter((c) => !c.id.equals(id));
  }
}
