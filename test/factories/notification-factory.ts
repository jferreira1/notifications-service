import {
  Notification,
  NotificationProps,
} from '../../src/app/entities/notification/notification';
import { Category } from '../../src/app/entities/notification/category';
import { Content } from '../../src/app/entities/notification/content';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: 'notification-example-id',
    content: new Content('Você recebeu uma nova notificação!'),
    category: new Category('test'),
    ...override,
  });
}
