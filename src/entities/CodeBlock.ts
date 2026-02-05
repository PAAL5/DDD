import { Id } from "src/value-objects/Id";
import { Comment } from "./Comment";
import { User } from "./User";
import { CodeBlockContent } from "src/value-objects/CodeBlockContent";

export class CodeBlock {
    private id: Id;
    private author: User;
    private content: CodeBlockContent;
    private comments: Comment[];

    constructor(id: Id, author: User, content: CodeBlockContent) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.comments = [];
    }

    public getId(): Id {
        return this.id;
    }

    public getAuthor(): User {
        return this.author;
    }

    public getContent(): CodeBlockContent {
        return this.content;
    }

    public setContent(content: CodeBlockContent): void {
        this.content = content;
    }

    public getComments(): Comment[] {
        return this.comments;
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }

    public equals(other: CodeBlock): boolean {
        return this.id === other.getId();
    }

}