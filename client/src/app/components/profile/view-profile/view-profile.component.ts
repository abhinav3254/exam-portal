import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/Profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  profile: Profile | undefined;
  spinnerFlag: boolean = false;

  constructor(private _profileService: ProfileService) { }

  ngOnInit(): void {
    this.spinnerFlag = true;
    this.getProfile();
  }


  getProfile(): void {
    this._profileService.getProfile().subscribe({
      next: (res) => {
        console.log(res);
        this.profile = res as Profile;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('completed in profile component');
        this.spinnerFlag = false;
      }
    });
  }

}
