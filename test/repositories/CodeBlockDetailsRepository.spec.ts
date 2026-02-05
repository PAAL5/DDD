import { CodeBlock } from '../../src/entities/CodeBlock';
import { CodeBlockDetailsRepository } from '../../src/repositories/CodeBlockDetailsRepository';
import { User } from '../../src/entities/User';
import { IdUser } from '../../src/value-objects/IdUser';
import { UserName } from '../../src/value-objects/UserName';
import { Email } from '../../src/value-objects/Email';
import { IdCodeBlock } from '../../src/value-objects/IdCodeBlock';
import { CodeBlockContent } from '../../src/value-objects/CodeBlockContent';

const mockUser = new User(
  new IdUser(1),
  new UserName('John Doe'),
  new Email('john@gmail.com'),
);

describe('CodeBlockDetailsRepository', () => {
  let repository: CodeBlockDetailsRepository;

  beforeEach(() => {
    repository = new CodeBlockDetailsRepository();
  });

  it('should initialize with an empty array of CodeBlockDetails', () => {
    expect(repository.getAll()).toEqual([]);
  });

  it('should add a CodeBlock and retrieve it', () => {
    const codeBlock: CodeBlock = new CodeBlock(
      new IdCodeBlock(1),
      mockUser,
      new CodeBlockContent('let test = 0;'),
    );
    repository.addCodeBlock(codeBlock);
    expect(repository.findCodeBlockById(1)).toEqual(codeBlock);
  });

  it('should return null if CodeBlock is not found', () => {
    expect(repository.findCodeBlockById(999)).toBeNull();
  });
});
