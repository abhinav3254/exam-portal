import { Component } from '@angular/core';
import { PROFILE_NAV, ProfileItems } from './Profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-side-nav',
  templateUrl: './profile-side-nav.component.html',
  styleUrls: ['./profile-side-nav.component.css']
})
export class ProfileSideNavComponent {

  sideItems: ProfileItems[] = PROFILE_NAV;

  constructor(private _router: Router) { }

  constructImagePath(path: string) {
    path = path.toLowerCase();
    return `../../../../assets/svg/${path}.svg`
  }

  changePath(url: string): void {
    this._router.navigate([`/${url}`]);
  }

}
