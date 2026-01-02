import { Component, inject } from '@angular/core';
import { Notification as NotificationService } from '../../services/notification';
import { catchError, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shared-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification {
  private notificationService = inject(NotificationService);

  pooling$ = this.notificationService.startPoolingNotification().pipe(
    map((response) => response),
    catchError(() => of([]))
  );

  notifications$ = this.notificationService.getNotifications().pipe(
    map((response) => response),
    catchError(() => of([]))
  );
}
