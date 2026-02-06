import { IdCodeBlock } from './../value-objects/IdCodeBlock';
import { User } from './User';
import { CodeBlockContent } from 'src/value-objects/CodeBlockContent';

export class CodeBlock {
  public readonly id: IdCodeBlock;
  public readonly author: User;
  public content: CodeBlockContent;

  private static lastId: number = 0;

  constructor(author: User, content: CodeBlockContent) {
    this.id = CodeBlock.generateId();
    this.author = author;
    this.content = content;
  }

  private static generateId(): IdCodeBlock {
    return new IdCodeBlock(++this.lastId);
  }

  public equals(other: CodeBlock): boolean {
    return this.id.equals(other.id);
  }
}
