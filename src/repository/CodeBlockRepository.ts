import { CodeBlock } from 'src/entities/CodeBlock';
import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';

export interface CodeBlockRepository {
  findById(id: IdCodeBlock): Promise<CodeBlock | null>;
}
