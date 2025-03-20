import { INotification } from 'src/types/notification';

export class NotificationMapper {
  static fromApi(data: any): INotification {
    return {
      id: data.id,
      title: data.title,
      description: data.description,
      userId: data.userId,
      createdAt: data.createdAt,
      readAt: data.readAt,
    };
  }
}
