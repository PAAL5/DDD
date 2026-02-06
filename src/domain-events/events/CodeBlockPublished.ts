import { CodeBlock } from "src/entities/CodeBlock";
import { DomainEvent } from "./DomainEvent";

export class CodeBlockPublished extends DomainEvent {
    public readonly codeBlock: CodeBlock;
    constructor(codeBlock: CodeBlock) {
        super();
        this.codeBlock = codeBlock;
    }
}