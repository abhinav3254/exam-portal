import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students/students.component';
import { OnboardStudentsComponent } from './components/students/onboard-students/onboard-students.component';
import { BackComponentComponent } from './components/back-component/back-component.component';
import { QuestionsComponent } from './components/questions/questions/questions.component';
import { CreateQuestionsComponent } from './components/questions/create-questions/create-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    StudentsComponent,
    OnboardStudentsComponent,
    BackComponentComponent,
    QuestionsComponent,
    CreateQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
