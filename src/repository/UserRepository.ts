import { UserRelations } from 'src/aggregates/UserRelations';
import { User } from 'src/entities/User';

export class UserRepository {
  private users: UserRelations[] = [];

  public getUsersWithRelations(): UserRelations[] {
    return [...this.users];
  }

  public getUsers(): User[] {
    return this.users.map((ur) => {
      return ur.getUser();
    });
  }

  public getUserById(id: number): User | null {
    const userRelations = this.users.find(
      (ur) => ur.getUser().getId().getValue() === id,
    );
    return userRelations ? userRelations.getUser() : null;
  }

  public getUserByIdWithRelations(id: number): UserRelations | null {
    const userRelations = this.users.find(
      (ur) => ur.getUser().getId().getValue() === id,
    );
    return userRelations || null;
  }

  public addUser(user: User): void {
    const newUserRelations = new UserRelations(user);
    this.users.push(newUserRelations);
  }

  public addRelation(userId: number, toAddUserId: number): void {
    const userRelations = this.getUserByIdWithRelations(userId);
    const toAddUser = this.getUserById(toAddUserId);
    if (userRelations && toAddUser) {
      userRelations.addRelation(
        userRelations.getUser().getId(),
        toAddUser.getId(),
      );
    }
  }

  public getRelations(userId: number): User[] {
    const userRelations = this.getUserByIdWithRelations(userId);
    if (userRelations) {
      const relationsId = userRelations.getRelations(
        userRelations.getUser().getId(),
      );
      return relationsId
        .map((id) => this.getUserById(id.getValue()))
        .filter((user): user is User => user !== null);
    }
    return [];
  }
}
