import { User } from "../../src/entities/User";
import { Email } from "../../src/value-objects/Email";
import { UserName } from "../../src/value-objects/UserName";

describe('Tests on user entity', () => {
    it('should create a user with valid data', () => {
        const user = User.register(new UserName('John Doe'), new Email('john.doe@example.com'));
        expect(user.id.value).toBe(2);
        expect(user.name.userName).toBe('John Doe');
        expect(user.email.email).toBe('john.doe@example.com');
    });

    it('should not allow registering with an already used email', () => {
        User.register(new UserName('Jane Doe'), new Email('jane.doe@example.com'));
        expect(() => User.register(new UserName('Another User'), new Email('jane.doe@example.com'))).toThrow("Email already used");
    });
});