import { CodeBlockRepository } from "src/repositories/CodeBlockRepository";
import { CodeBlockPublished } from "../events/CodeBlockPublished";
import { DomainEventHandler } from "./DomainEventHandler";

export class CodeBlockPublishedHandler extends DomainEventHandler {
    private codeBlockRepository = CodeBlockRepository.getInstance();
    handle(event: CodeBlockPublished): void {
        this.codeBlockRepository.add(event.codeBlock);
    }
}