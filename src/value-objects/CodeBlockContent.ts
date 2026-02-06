export class CodeBlockContent {
  public readonly codeBlockContent: string;

  constructor(codeBlockContent: string) {
    this.codeBlockContent = codeBlockContent;
  }

  public equals(other: CodeBlockContent): boolean {
    return this.codeBlockContent === other.codeBlockContent;
  }
}
