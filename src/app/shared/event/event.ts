import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shared-event',
  imports: [CommonModule, RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  @Input() id: string = '';
  @Input() picture: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
}
