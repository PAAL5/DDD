import { IdUser } from 'src/value-objects/IdUser';

export class UserRelations {
  private relationsId: IdUser[];

  constructor(relationsId: IdUser[] = []) {
    this.relationsId = relationsId;
  }

  public addRelation(userId: IdUser): void {
    this.relationsId.push(userId);
  }

  public getRelations(): IdUser[] {
    return [...this.relationsId];
  }

  public findRelationById(userId: IdUser): IdUser | undefined {
    return this.relationsId.find((id) => id.equals(userId));
  }
}
