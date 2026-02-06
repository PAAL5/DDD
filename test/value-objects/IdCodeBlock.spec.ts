import { IdCodeBlock } from '../../src/value-objects/IdCodeBlock';

describe('IdCodeBlock', () => {
  it('stores and returns content', () => {
    const content = new IdCodeBlock(1);
    expect(content.getValue()).toBe(1);
  });

  it('compares content equality', () => {
    const c1 = new IdCodeBlock(1);
    const c2 = new IdCodeBlock(1);
    const c3 = new IdCodeBlock(2);

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
