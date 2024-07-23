import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  constructor(private _router: Router) { }

  onboardStudent(): void {
    this._router.navigate(['/students/onboard']);
  }

}
