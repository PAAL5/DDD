import { Email } from "src/value-objects/Email";
import { Id } from "src/value-objects/Id";
import { UserName } from "src/value-objects/UserName";

export class User {
    private id: Id;
    private name: UserName;
    private email: Email;
    constructor(id: Id, name: UserName, email: Email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    public getId(): Id {
        return this.id;
    }

    public getName(): UserName {
        return this.name;
    }

    public getEmail(): Email {
        return this.email;
    }

    public setName(name: UserName): void {
        this.name = name;
    }

    public setEmail(email: Email): void {
        this.email = email;
    }

    public equals(other: User): boolean {
        return this.id === other.getId();
    }
}