import { expect, describe, it } from '@jest/globals';
import { IdUser } from '../../src/value-objects/IdUser';

describe('IdUser', () => {
  it('stores and returns content', () => {
    const content = new IdUser(1);
    expect(content.value).toBe(1);
  });

  it('compares content equality', () => {
    const c1 = new IdUser(1);
    const c2 = new IdUser(1);
    const c3 = new IdUser(2);

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
