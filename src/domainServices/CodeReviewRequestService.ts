import { UserRelations } from 'src/aggregates/UserRelations';
import { CodeBlock } from 'src/entities/CodeBlock';
import { User } from 'src/entities/User';
import { NoUserRelationError } from 'src/errors/NoUserRelationError';

export class CodeReviewRequestService {
  public requestReview(codeBlock: CodeBlock, requesterRelations: UserRelations, reviewer: User): void {
    this.relationExists(requesterRelations, reviewer);
    // Send mail HERE
  }

  private relationExists(requesterRelations: UserRelations, reviewer: User): void {
    if (!requesterRelations.hasRelation(reviewer.id)) {
      throw new NoUserRelationError();
    }
  }
}
