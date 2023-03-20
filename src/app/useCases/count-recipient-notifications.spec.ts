import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '../../../test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
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
    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-example-2' }),
    );

    const exampleOne = await countRecipientNotifications.execute({
      recipientId: 'recipient-example-1',
    });

    const exampleTwo = await countRecipientNotifications.execute({
      recipientId: 'recipient-example-2',
    });

    const exampleThree = await countRecipientNotifications.execute({
      recipientId: 'recipient-example-3',
    });

    expect(exampleOne.count).toEqual(3);
    expect(exampleTwo.count).toEqual(1);
    expect(exampleThree.count).toEqual(0);
  });
});
