import { IdComment } from 'src/value-objects/IdComment';
import { Comment } from 'src/entities/Comment';

export class CommentRepository {
  private comments: Comment[] = [];

  getAll(): Comment[] {
    return this.comments;
  }

  findById(id: IdComment): Comment | null {
    const comment = this.comments.find((c) => c.id.equals(id));
    return comment || null;
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
