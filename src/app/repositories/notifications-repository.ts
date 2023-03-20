import { Notification } from '../entities/notification/notification';

export abstract class NotificationsRepository {
  abstract findById(id: string): Promise<Notification | null>;
  abstract create(notification: Notification): Promise<void>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
}
