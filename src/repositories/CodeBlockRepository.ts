import { CodeBlock } from 'src/entities/CodeBlock';
import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';

export class CodeBlockRepository {
  private codeBlocks: CodeBlock[] = [];

  private static instance: CodeBlockRepository;

  private constructor() {}

  public static getInstance(): CodeBlockRepository {
    if (!CodeBlockRepository.instance) {
      CodeBlockRepository.instance = new CodeBlockRepository();
    }
    return CodeBlockRepository.instance;
  }

  getAll(): CodeBlock[] {
    return this.codeBlocks;
  }

  findById(id: IdCodeBlock): CodeBlock | null {
    const codeBlock = this.codeBlocks.find((cb) => cb.id.equals(id));
    return codeBlock || null;
  }

  add(codeBlock: CodeBlock): void {
    this.codeBlocks.push(codeBlock);
  }
}
