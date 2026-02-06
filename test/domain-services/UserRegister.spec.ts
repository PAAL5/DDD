import { UserRegister } from "../../src/domainServices/UserRegister";
import { Email } from "../../src/value-objects/Email";
import { UserName } from "../../src/value-objects/UserName";

describe('User Registration', () => {
    it('should register a new user successfully', () => {
        const userRegister = new UserRegister();
        const name = new UserName("John Doe");
        const email = new Email("john.doe@example.com");
        const user = userRegister.register(name, email);

        expect(user).toBeDefined();
        expect(user.name).toEqual(name);
        expect(user.email).toEqual(email);
    });

    it('should throw an error when trying to register with an already used email', () => {
        const userRegister = new UserRegister();
        const name1 = new UserName("John Doe");
        const email1 = new Email("jane.doe@example.com");
        userRegister.register(name1, email1);

        const name2 = new UserName("Jane Doe");
        const email2 = new Email("jane.doe@example.com");
        expect(() => userRegister.register(name2, email2)).toThrow();
    });
});