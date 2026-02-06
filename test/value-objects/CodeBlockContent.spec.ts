import { CodeBlockContent } from '../../src/value-objects/CodeBlockContent';

describe('CodeBlockContent', () => {
  it('stores and returns content', () => {
    const content = new CodeBlockContent('test');
    expect(content.codeBlockContent).toBe('test');
  });

  it('compares content equality', () => {
    const c1 = new CodeBlockContent('same');
    const c2 = new CodeBlockContent('same');
    const c3 = new CodeBlockContent('different');

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
