import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Content } from '../entities/notification/content';
import { Category } from '../entities/notification/category';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { Notification } from '../entities/notification/notification';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-example-1',
        content: new Content('你好， 巴西! '),
        category: new Category('social'),
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-example-1',
        content: new Content('您收到了一個新的朋友請求!'),
        category: new Category('social'),
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'recipient-example-2',
        content: new Content('Você recebeu uma nova solicitação de amizade!'),
        category: new Category('social'),
      }),
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

    expect(exampleOne.count).toEqual(2);
    expect(exampleTwo.count).toEqual(1);
    expect(exampleThree.count).toEqual(0);
  });
});
