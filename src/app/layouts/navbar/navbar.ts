import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Notification } from '../../shared/notification/notification';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Notification],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
