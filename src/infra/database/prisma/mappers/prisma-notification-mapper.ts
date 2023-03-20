import { Notification as RawNotification } from '@prisma/client';
import { Category } from 'src/app/entities/notification/category';
import { Content } from 'src/app/entities/notification/content';
import { Notification } from 'src/app/entities/notification/notification';
import { makeNotification } from 'test/factories/notification-factory';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category.value,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification) {
    return new Notification(
      {
        recipientId: raw.recipientId,
        content: new Content(raw.content),
        category: new Category(raw.category),
        createdAt: raw.createdAt,
        readAt: raw.readAt,
        canceledAt: raw.canceledAt,
      },
      raw.id,
    );
  }
}
