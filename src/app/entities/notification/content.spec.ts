import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    expect(
      () => new Content('Você realizou uma compra no valor de R$3,00'),
    ).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('test')).toThrow();
  });

  it('should not be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
