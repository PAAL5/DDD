import { Id } from 'src/value-objects/Id';
import { User } from './User';
import { CodeBlockContent } from 'src/value-objects/CodeBlockContent';

export class CodeBlock {
  private id: Id;
  private author: User;
  private content: CodeBlockContent;

  constructor(id: Id, author: User, content: CodeBlockContent) {
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

  public getContent(): CodeBlockContent {
    return this.content;
  }

  public setContent(content: CodeBlockContent): void {
    this.content = content;
  }

  public equals(other: CodeBlock): boolean {
    return this.id === other.getId();
  }
}
