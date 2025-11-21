import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Event } from './pages/event/event';
import { Detail } from './pages/event/detail/detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'event',
    component: Event,
  },
  {
    path: 'event/:id',
    component: Detail
  }
];
