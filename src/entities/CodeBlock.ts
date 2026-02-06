import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';
import { User } from './User';
import { CodeBlockContent } from 'src/value-objects/CodeBlockContent';

export class CodeBlock {
  public readonly id: IdCodeBlock;
  public readonly author: User;
  public content: CodeBlockContent;

  constructor(id: IdCodeBlock, author: User, content: CodeBlockContent) {
    this.id = id;
    this.author = author;
    this.content = content;
  }

  public equals(other: CodeBlock): boolean {
    return this.id.equals(other.id);
  }
}
