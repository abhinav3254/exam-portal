import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private _authService: AuthService, private toastr: ToastrService, private _router: Router) { }

  response: Response | undefined;
  spinnerFlag: boolean = false;

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
    this.spinnerFlag = true;
    console.log(this.loginForm.value);
    this.loginUser(this.loginForm.value);
    this.closeSpinner();
  }

  _submitSignupForm(): void {
    this.spinnerFlag = true;
    console.log(this.signupForm.value);
    this.registerUser(this.signupForm.value);
    this.closeSpinner();
  }

  private registerUser(data: any): void {
    this._authService._registerUser(data).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        if (error.status === 201) {
          console.log('done');
          this.showSuccess();
        } else {
          this.showInfo();
        }
      },
      complete: () => {
        console.log('completed');
      }
    });
  }

  private loginUser(data: any): void {
    this._authService._loginUser(data).subscribe({
      next: (data) => {
        const token = data.response;
        sessionStorage.setItem('token', token);
        this.spinnerFlag = false;
        this._router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
        if (error.status === 200) {
          console.log('done');
          this.showSuccess();
        } else {
          this.showInfo();
        }
      },
      complete: () => {
        console.log('completed');
      }
    });
  }


  closeSpinner(): void {
    setTimeout(() => {
      this.spinnerFlag = false;
    }, 7000);
  }


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!', {
      timeOut: 3000,
    });
  }
  showError() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showInfo() {
    this.toastr.info('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  showWarning() {
    this.toastr.warning('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }

}
