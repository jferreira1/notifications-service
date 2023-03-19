import { Category } from './category';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'n3kj123',
      content: new Content('Notificação de teste'),
      category: new Category('security'),
    });

    expect(notification).toBeTruthy();
  });
});
