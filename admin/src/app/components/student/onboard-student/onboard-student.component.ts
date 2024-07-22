import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboard-student',
  templateUrl: './onboard-student.component.html',
  styleUrls: ['./onboard-student.component.scss']
})
export class OnboardStudentComponent {
  onboardForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    phone: new FormControl("", [Validators.required, Validators.minLength(10)]),
    class: new FormControl("", [Validators.required])
  });
}
