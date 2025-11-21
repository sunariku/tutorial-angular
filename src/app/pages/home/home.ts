import { Component } from '@angular/core';
import { Event } from '../../shared/event/event';

@Component({
  selector: 'app-home',
  imports: [Event],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data = [
    {
      id: 1,
      picture: 'https://picsum.photos/id/11/200/100',
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      id: 2,
      picture: 'https://picsum.photos/id/12/200/100',
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      id: 3,
      picture: 'https://picsum.photos/id/13/200/100',
      title: 'Title 3',
      description: 'Description 3',
    },
    {
      id: 4,
      picture: 'https://picsum.photos/id/14/200/100',
      title: 'Title 4',
      description: 'Description 4',
    },
  ];
}
