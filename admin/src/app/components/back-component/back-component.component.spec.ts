import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackComponentComponent } from './back-component.component';

describe('BackComponentComponent', () => {
  let component: BackComponentComponent;
  let fixture: ComponentFixture<BackComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackComponentComponent]
    });
    fixture = TestBed.createComponent(BackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
