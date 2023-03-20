import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/useCases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from 'src/app/useCases/cancel-notification';
import { CountRecipientNotifications } from 'src/app/useCases/count-recipient-notifications';
import { GetRecipientNotifications } from 'src/app/useCases/get-recipient-notifications';
import { ReadNotification } from 'src/app/useCases/read-notifications';
import { UnreadNotification } from 'src/app/useCases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
