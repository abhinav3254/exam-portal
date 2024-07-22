import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentDetailsComponent } from './components/student/student-details/student-details.component';
import { OnboardStudentComponent } from './components/student/onboard-student/onboard-student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', component: StudentDetailsComponent },
  { path: 'students/onboard', component: OnboardStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
