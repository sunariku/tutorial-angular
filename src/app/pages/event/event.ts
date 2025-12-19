import { Component, inject, OnInit } from '@angular/core';
import { Event as EventSharedComponent } from '../../shared/event/event';
import { Event as EventService } from '../../services/event';
import { Create } from './create/create';
import { catchError, map, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Event as EventModel } from '../../models/event';

@Component({
  selector: 'app-event',
  imports: [EventSharedComponent, Create, CommonModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event implements OnInit {
  private eventService = inject(EventService);

  events$ = new Observable<EventModel[]>();

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.events$ = this.eventService.getEvents().pipe(
      map((response) => response),
      catchError(() => of([]))
    );
  }
}
