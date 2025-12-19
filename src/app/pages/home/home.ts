import { Component, inject } from '@angular/core';
import { Event } from '../../shared/event/event';
import { Event as EventService } from '../../services/event';
import { catchError, map, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Event, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private eventService = inject(EventService);

  events$ = this.eventService.getEvents().pipe(
    map((response) => response),
    catchError(() => of([]))
  );
}
