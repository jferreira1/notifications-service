import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Category } from '../entities/notification/category';
import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade.'),
      category: new Category('social'),
      recipientId: 'notification-example-id',
    });
    await notificationsRepository.create(notification);

    await cancelNotification.execute({ notificationId: notification.id });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'notification-fake-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
