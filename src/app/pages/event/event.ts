import { Component, inject } from '@angular/core';
import { Event as EventSharedComponent } from '../../shared/event/event';
import { Event as EventService } from '../../services/event';
import { Create } from "./create/create";

@Component({
  selector: 'app-event',
  imports: [EventSharedComponent, Create],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  private eventService = inject(EventService);

  data = this.eventService.data;
}
