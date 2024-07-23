import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardStudentsComponent } from './onboard-students.component';

describe('OnboardStudentsComponent', () => {
  let component: OnboardStudentsComponent;
  let fixture: ComponentFixture<OnboardStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnboardStudentsComponent]
    });
    fixture = TestBed.createComponent(OnboardStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
