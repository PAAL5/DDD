import { Comment } from "../../entities/Comment";
import { DomainEvent } from "./DomainEvent";

export class CommentCreated extends DomainEvent {

    public readonly comment: Comment;

    constructor(comment: Comment) {
        super();
        this.comment = comment;
    }
}