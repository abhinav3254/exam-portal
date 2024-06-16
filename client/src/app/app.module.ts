import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { BaseurlInterceptor } from './baseurl.interceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileSideNavComponent } from './components/profile/profile-side-nav/profile-side-nav.component';
import { ViewProfileComponent } from './components/profile/view-profile/view-profile.component';
import { UpdateProfileComponent } from './components/profile/update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SpinnerComponent,
    NavComponent,
    ProfileComponent,
    ProfileSideNavComponent,
    ViewProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'inline' }) // ToastrModule added
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseurlInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
