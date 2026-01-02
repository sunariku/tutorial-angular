import { Component, inject, OnInit } from '@angular/core';
import { Notification as NotificationService } from '../../services/notification';
import { catchError, map, Observable, of, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Notification as NotificationModel } from '../../models/notification';
import { Sse as SseService } from '../../services/sse';

@Component({
  selector: 'app-shared-notification',
  imports: [CommonModule],
  templateUrl: './notification.html',
  styleUrl: './notification.css',
})
export class Notification implements OnInit {
  private notificationService = inject(NotificationService);
  private sseService = inject(SseService);

  data$ = new Observable<{ total: number }>();

  notifications$ = new Observable<NotificationModel[]>();

  pooling$ = this.notificationService.startPoolingNotification().pipe(
    map((response) => response),
    catchError(() => of([]))
  );

  ngOnInit(): void {
    this.data$ = this.sseService.connect('http://localhost:3000/sse').pipe(
      map((response) => response),
      catchError(() => of({} as { total: number }))
    );
  }

  getNotifications() {
    this.sseService
      .sendNotification('Tes', 'Tes')
      .pipe(take(1))
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
    this.notifications$ = this.notificationService.getNotifications().pipe(
      map((response) => response),
      catchError(() => of([]))
    );
  }
}
