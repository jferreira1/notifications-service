import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification/notification';
import { NotificationsRepository } from '../../../../app/repositories/notifications-repository';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(id: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const persistence = PrismaNotificationMapper.toPrisma(notification);
    await this.prismaService.notification.create({
      data: persistence,
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
