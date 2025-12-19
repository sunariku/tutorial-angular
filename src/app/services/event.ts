import { inject, Injectable } from '@angular/core';
import { Event as EventModel } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Event {
  private http = inject(HttpClient);

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`http://localhost:3000/events`);
  }

  addEvent(dataEvent: EventModel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`http://localhost:3000/events`, dataEvent);
  }
}
