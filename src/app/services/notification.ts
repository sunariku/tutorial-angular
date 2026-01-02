import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { interval, Observable, switchMap } from 'rxjs';
import { Notification as NotificationModel } from '../models/notification';

@Injectable({
  providedIn: 'root',
})
export class Notification {
  private http = inject(HttpClient);

  startPoolingNotification(): Observable<NotificationModel[]> {
    return interval(2000).pipe(
      switchMap(() => this.http.get<NotificationModel[]>(`http://localhost:3000/notifications`))
    );
  }

  getNotifications(): Observable<NotificationModel[]> {
    return this.http.get<NotificationModel[]>(`http://localhost:3000/notifications`);
  }
}
