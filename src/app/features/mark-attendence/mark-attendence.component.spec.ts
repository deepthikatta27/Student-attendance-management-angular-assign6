import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAttendenceComponent } from './mark-attendence.component';

describe('MarkAttendenceComponent', () => {
  let component: MarkAttendenceComponent;
  let fixture: ComponentFixture<MarkAttendenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkAttendenceComponent]
    });
    fixture = TestBed.createComponent(MarkAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
