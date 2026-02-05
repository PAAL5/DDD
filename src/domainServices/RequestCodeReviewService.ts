import { IdCodeBlock } from 'src/value-objects/IdCodeBlock';
import { IdUser } from 'src/value-objects/IdUser';

export class RequestCodeReviewService {
  public requestReview(codeBlockId: IdCodeBlock, reviewerId: IdUser): void {
    // Send mail HERE
  }
}
