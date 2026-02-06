import { IdUser } from 'src/value-objects/IdUser';
import { IdCodeBlock } from './../value-objects/IdCodeBlock';
import { CodeBlockContent } from 'src/value-objects/CodeBlockContent';

export class CodeBlock {
  public readonly id: IdCodeBlock;
  public readonly author: IdUser;
  public content: CodeBlockContent;

  private static lastId: number = 0;

  constructor(author: IdUser, content: CodeBlockContent) {
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
