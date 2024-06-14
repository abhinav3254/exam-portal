import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private _authService: AuthService) { }

  response: Response | undefined;

  loginFormFlag: boolean = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  signupForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  _changeLoginForm() {
    this.loginFormFlag = !this.loginFormFlag;
  }

  _submitLoginForm(): void {
    console.log(this.loginForm.value);
  }

  _submitSignupForm(): void {
    console.log(this.signupForm.value);
    this.registerUser(this.signupForm.value);
  }

  private registerUser(data: any): void {
    this._authService._registerUser(data).subscribe(
      (res: Response) => {
        this.response = res as Response;
        if (this.response.status === 201) {
          console.log("User added successfully");
        }
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }

}
