import { Notification } from 'src/app/entities/notification/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(id: string): Promise<Notification | null> {
    const notification = this.notifications.find((item) => item.id === id);

    if (!notification) {
      return null;
    }

    return notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );
    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
}
