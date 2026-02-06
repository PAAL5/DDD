import { CommentMessage } from '../../src/value-objects/CommentMessage';

describe('CommentMessage', () => {
  it('stores and returns content', () => {
    const content = new CommentMessage('test');
    expect(content.commentMessage).toBe('test');
  });

  it('compares content equality', () => {
    const c1 = new CommentMessage('same');
    const c2 = new CommentMessage('same');
    const c3 = new CommentMessage('different');

    expect(c1.equals(c2)).toBe(true);
    expect(c1.equals(c3)).toBe(false);
  });
});
