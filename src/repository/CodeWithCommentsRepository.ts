import { IdComment } from 'src/value-objects/IdComment';

export interface CodeWithCommentsRepository {
  findCommentById(id: IdComment): Promise<string | null>;
}
