import { User } from "src/entities/User";
import { DomainEvent } from "./DomainEvent";

export class UserCreated extends DomainEvent {
    public readonly user: User;
    
    constructor(user: User) {
        super();
        this.user = user;
    }
}