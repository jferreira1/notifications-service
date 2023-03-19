import { Category } from './category';

describe('Notification category', () => {
  it('should be able to create a notification category', () => {
    expect(() => new Category('social')).toBeTruthy();
  });

  it('should not be able to create a invalid notification category', () => {
    expect(() => new Category('loremipsum')).toThrow();
  });
});
