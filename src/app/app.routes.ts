import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Event } from './pages/event/event';

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
];
