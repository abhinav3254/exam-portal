import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { genders } from '../../constants/commons';

@Component({
  selector: 'app-onboard-students',
  templateUrl: './onboard-students.component.html',
  styleUrls: ['./onboard-students.component.scss']
})
export class OnboardStudentsComponent {

  genders: string[] = genders;

  currentLocation: Location | undefined
  constructor(location: Location) {
    this.currentLocation = location;
  }

}
