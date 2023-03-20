import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

interface UnreadNotificationResponse {
  notification: Notification;
}

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequest,
  ): Promise<UnreadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationsRepository.save(notification);
    return { notification };
  }
}
