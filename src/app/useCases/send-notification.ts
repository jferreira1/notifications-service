import { Injectable } from '@nestjs/common';
import { Category } from '../entities/notification/category';
import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category: new Category(category),
    });

    // Persistência
    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
