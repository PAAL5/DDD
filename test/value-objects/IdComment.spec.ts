import { IdComment } from '../../src/value-objects/IdComment';

describe('IdComment', () => {
  it('stores and returns content', () => {
    const content = new IdComment(1);
    expect(content.getValue()).toBe(1);
  });

  it('compares content equality', () => {
    const c1 = new IdComment(1);
    const c2 = new IdComment(1);
    const c3 = new IdComment(2);

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
