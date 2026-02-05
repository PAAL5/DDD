export class CommentMessage {
    private commentMessage: string;
    constructor(commentMessage: string) {
        this.commentMessage = commentMessage;
    }

    public getCommentMessage(): string {
        return this.commentMessage;
    }

    public equals(other: CommentMessage): boolean {
        return this.commentMessage === other.getCommentMessage();
    }
}