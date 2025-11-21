import { Component } from '@angular/core';
import { Event as EventSharedComponent } from "../../shared/event/event";

@Component({
  selector: 'app-event',
  imports: [EventSharedComponent],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {

}
