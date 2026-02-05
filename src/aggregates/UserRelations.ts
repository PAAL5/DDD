import { IdUser } from 'src/value-objects/IdUser';
import { User } from 'src/entities/User';

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

  public addRelation(userId: IdUser, toAddUser: IdUser): void {
    if (userId.equals(this.user.getId())) {
      if (!this.relationsId.some((id) => id.equals(toAddUser))) {
        this.relationsId.push(toAddUser);
      }
    }
  }

  public getRelations(userId: IdUser): IdUser[] {
    return userId.equals(this.user.getId()) ? this.relationsId : [];
  }
}
