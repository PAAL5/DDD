import { Email } from '../../src/value-objects/Email';

describe('Email', () => {
  it('stores and returns content', () => {
    const content = new Email('test@gmail.com');
    expect(content.email).toBe('test@gmail.com');
  });

  it('validates email format', () => {
    expect(() => new Email('invalid-email')).toThrow();
    expect(() => new Email('valid-email@gmail.com')).not.toThrow();
  });

  it('compares content equality', () => {
    const c1 = new Email('same@gmail.com');
    const c2 = new Email('same@gmail.com');
    const c3 = new Email('different@gmail.com');

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
