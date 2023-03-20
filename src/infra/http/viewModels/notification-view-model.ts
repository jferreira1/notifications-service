import { Notification } from 'src/app/entities/notification/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      recipiendId: notification.recipientId,
      content: notification.content.value,
      category: notification.category.value,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }
}
