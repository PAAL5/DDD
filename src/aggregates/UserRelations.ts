import { IdUser } from 'src/value-objects/IdUser';
import { User } from 'src/entities/User';
import { RelationAlreadyExistingError } from 'src/errors/RelationAlreadyExistingError';

export class UserRelations {
  private user: User;
  private relationsId: IdUser[];

  constructor(user: User, relationsId: IdUser[] = []) {
    this.user = user;
    this.relationsId = relationsId;
  }

  public getUser(): User {
    return this.user;
  }

  public addRelation(toAddUser: IdUser): void {
        this.relationAlreadyExists(toAddUser);
        this.relationsId.push(toAddUser);
  }

  private relationAlreadyExists(toAddUser: IdUser): void {
      if(this.hasRelation(toAddUser)) throw new RelationAlreadyExistingError();
  }

  public getRelations(): IdUser[] {
    return this.relationsId;
  }

  public hasRelation(toCheckUser: IdUser): boolean {
      return this.relationsId.some((id) => id.equals(toCheckUser));
  }
}
