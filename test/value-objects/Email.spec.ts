import { Email } from '../../src/value-objects/Email';

describe('Email', () => {
  it('stores and returns content', () => {
    const content = new Email('test');
    expect(content.getEmail()).toBe('test');
  });

  it('compares content equality', () => {
    const c1 = new Email('same');
    const c2 = new Email('same');
    const c3 = new Email('different');

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
