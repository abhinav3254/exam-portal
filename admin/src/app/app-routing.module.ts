import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students/students.component';
import { OnboardStudentsComponent } from './components/students/onboard-students/onboard-students.component';
import { QuestionsComponent } from './components/questions/questions/questions.component';
import { CreateQuestionsComponent } from './components/questions/create-questions/create-questions.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/onboard', component: OnboardStudentsComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'questions/create', component: CreateQuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
