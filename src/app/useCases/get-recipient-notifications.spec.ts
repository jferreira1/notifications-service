import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { makeNotification } from '../../../test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get a list of recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example-1' }),
    );
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example-1' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-example-1',
    });

    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-example-1' }),
        expect.objectContaining({ recipientId: 'recipient-example-1' }),
      ]),
    );
  });
});
