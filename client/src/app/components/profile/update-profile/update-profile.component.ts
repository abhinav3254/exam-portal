import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../../interfaces/Profile';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  spinnerFlag: boolean = false;
  profile: Profile | undefined;

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

  submitUpdateProfile(): void {
    console.log(this.profile);
  }
}
