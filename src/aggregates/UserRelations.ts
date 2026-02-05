import { User } from 'src/entities/User';
import { Id } from 'src/value-objects/Id';

export class UserRelations {
  private relations: User[];

  constructor(relations: User[] = []) {
    this.relations = relations;
  }

  public addRelation(user: User): void {
    this.relations.push(user);
  }

  public getRelations(): User[] {
    return this.relations;
  }

  public findRelationById(userId: Id): User | undefined {
    return this.relations.find((user) => user.getId() === userId);
  }
}
