export class CommentMessage {
  public readonly commentMessage: string;

  constructor(commentMessage: string) {
    this.commentMessage = commentMessage;
  }

  public equals(other: CommentMessage): boolean {
    return this.commentMessage === other.commentMessage;
  }
}
