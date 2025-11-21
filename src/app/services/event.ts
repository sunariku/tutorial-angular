import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Event {
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
    {
      id: 5,
      picture: 'https://picsum.photos/id/15/200/100',
      title: 'Title 5',
      description: 'Description 5',
    },
  ];
}
