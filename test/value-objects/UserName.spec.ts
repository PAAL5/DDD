import { UserName } from '../../src/value-objects/UserName';

describe('UserName', () => {
  it('stores and returns content', () => {
    const content = new UserName('test');
    expect(content.getUserName()).toBe('test');
  });

  it('compares content equality', () => {
    const c1 = new UserName('same');
    const c2 = new UserName('same');
    const c3 = new UserName('different');

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
