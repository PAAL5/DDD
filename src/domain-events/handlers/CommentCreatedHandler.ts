import { CommentRepository } from "../../repositories/CommentRepository";
import { CommentCreated } from "../events/CommentCreated";
import { DomainEventHandler } from "./DomainEventHandler";

export class CommentCreatedHandler extends DomainEventHandler {
    private commentRepository: CommentRepository = CommentRepository.getInstance();
    
    handle(event: CommentCreated): void {
        this.commentRepository.add(event.comment);
    }
}