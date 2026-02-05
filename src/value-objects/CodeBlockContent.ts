export class CodeBlockContent {
  private codeBlockContent: string;

  constructor(codeBlockContent: string) {
    this.codeBlockContent = codeBlockContent;
  }

  public getCodeBlockContent(): string {
    return this.codeBlockContent;
  }

  public equals(other: CodeBlockContent): boolean {
    return this.codeBlockContent === other.getCodeBlockContent();
  }
}
