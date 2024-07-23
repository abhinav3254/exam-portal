import { Component } from '@angular/core';
import { options } from '../constants/side-nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  options: string[] = options;

  constructor(private _router: Router) { }

  getImageLink(name: string) {
    return `../../../assets/side-nav/${name.toLowerCase()}.svg`;
  }

  changeRoute(name: string) {
    this._router.navigate([`/${name.toLowerCase()}`]);
  }

}
