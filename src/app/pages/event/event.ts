import { Component, inject } from '@angular/core';
import { Event as EventSharedComponent } from '../../shared/event/event';
import { Event as EventService } from '../../services/event';
import { Create } from './create/create';
import { catchError, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  imports: [EventSharedComponent, Create, CommonModule],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  private eventService = inject(EventService);

  events$ = this.eventService.getEvents().pipe(
    map((response) => response),
    catchError(() => of([]))
  );
}
