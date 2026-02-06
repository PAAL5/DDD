import { UserRepository } from "../../repositories/UserRepository";
import { UserCreated } from "../events/UserCreated";
import { DomainEventHandler } from "./DomainEventHandler";

export class UserCreatedHandler extends DomainEventHandler {
    private userRepository: UserRepository = UserRepository.getInstance();
    handle(event: UserCreated): void {
        this.userRepository.add(event.user);
    }
}