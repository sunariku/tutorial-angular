import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Event as EventService } from '../../services/event';
import { Event as EventModel } from '../../models/event';

@Component({
  selector: 'app-shared-event',
  imports: [CommonModule, RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  @Input() id: number = 0;
  @Input() picture: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  private eventService = inject(EventService);

  onDescriptionClick(): void {
    const data: EventModel = {
      id: 7,
      picture: 'https://picsum.photos/id/16/200/100',
      title: 'Title 7',
      description: 'Description 7'
    };

    this.eventService.addEvent(data);
  }
}
