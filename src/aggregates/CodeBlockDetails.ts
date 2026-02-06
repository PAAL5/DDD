import { CodeBlock } from 'src/entities/CodeBlock';
import { Comment } from 'src/entities/Comment';
import { CommentNotExistingError } from './../errors/CommentNotExistingError';
import { IdComment } from 'src/value-objects/IdComment';
import { DomainEvent } from '../domain-events/events/DomainEvent';
import { EventDispatcher } from '../domain-events/EventDispatcher';
import { CommentCreated } from '../domain-events/events/CommentCreated';

export class CodeBlockDetails {
  private codeBlock: CodeBlock;
  private comments: Comment[];
  private events: DomainEvent[] = [];
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
    this.addEvent(new CommentCreated(comment));
    this.save();
  }

  public findCommentById(commentId: IdComment): Comment | undefined {
    this.commentExists(commentId);
    return this.comments.find((comment) => comment.id.equals(commentId));
  }

  private commentExists(commentId: IdComment): void {
    if (!this.comments.some((comment) => comment.id.equals(commentId))) {
      throw new CommentNotExistingError();
    }
  }

  private save(): void {
    const events = this.releaseEvents();
    const eventDispatcher = EventDispatcher.getInstance();
    events.forEach((event) => {
      eventDispatcher.dispatch(event);
    });
  }

  private addEvent(event: DomainEvent): void {
    this.events.push(event);
  }

  public releaseEvents(): DomainEvent[] {
    return [...this.events];
  }
}
