import { CodeBlock } from 'src/entities/CodeBlock';
import { User } from 'src/entities/User';

export class CodeReviewRequestService {
  public requestReview(codeBlock: CodeBlock, requester: User, reviewer: User): void {
    // Send mail HERE
  }
}
