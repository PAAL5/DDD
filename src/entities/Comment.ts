import { User } from "./User";
import { Id } from "src/value-objects/Id";
import { CommentMessage } from "src/value-objects/CommentMessage";

export class Comment {
    private id: Id;
    private author: User;
    private content: CommentMessage;

    constructor(id: Id, author: User, content: CommentMessage) {
        this.id = id;
        this.author = author;
        this.content = content;
    }

    public getId(): Id {
        return this.id;
    }
    public getAuthor(): User {
        return this.author;
    }

    public getContent(): CommentMessage {
        return this.content;
    }

    public setContent(content: CommentMessage): void {
        this.content = content;
    }

    public equals(other: Comment): boolean {
        return this.id === other.getId();
    }
}