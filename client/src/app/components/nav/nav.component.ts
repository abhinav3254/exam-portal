import { Component, OnInit } from '@angular/core';
import { DROP_DOWN, NAV_ITEMS } from './nav-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  nav_items: string[] = NAV_ITEMS;

  drop_downs: string[] = DROP_DOWN;

  constructor(private _router: Router) { }

  navigatePage(name: string): void {
    var route = name.toLowerCase();
    if (route === 'profile') route = 'user';
    this._router.navigate([`/${route}`]);
  }

}
