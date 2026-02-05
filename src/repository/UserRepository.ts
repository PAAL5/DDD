import { User } from 'src/entities/User';
import { IdUser } from 'src/value-objects/IdUser';

export interface UserRepository {
  findById(id: IdUser): Promise<User | null>;
}
