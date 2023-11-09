import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAttendenceComponent } from './show-attendence.component';

describe('ShowAttendenceComponent', () => {
  let component: ShowAttendenceComponent;
  let fixture: ComponentFixture<ShowAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAttendenceComponent]
    });
    fixture = TestBed.createComponent(ShowAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
