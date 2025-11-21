import { Component, inject } from '@angular/core';
import { Event } from '../../shared/event/event';
import { Event as EventService } from '../../services/event';

@Component({
  selector: 'app-home',
  imports: [Event],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private eventService = inject(EventService);

  data = this.eventService.data;
}
