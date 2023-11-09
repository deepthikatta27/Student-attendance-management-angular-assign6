import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { StudentsDataService } from 'src/app/services/studentsData.service';

@Component({
  selector: 'app-mark-attendence',
  templateUrl: './mark-attendence.component.html',
  styleUrls: ['./mark-attendence.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, 
    { provide: MAT_DATE_FORMATS, useValue: { display: { dateInput: 'DD/MM/YYYY' } } } 
  ]
})
export class MarkAttendenceComponent {
  markStudent: FormGroup;
  allStudents: any = [];

  constructor(private fb: FormBuilder, private studentsDataService: StudentsDataService) {
    this.markStudent = this.fb.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      status: ['', Validators.required]
    });
    this.studentsDataService.allStudents$.subscribe((students) => {
      this.allStudents = students;
    });
    this.studentsDataService.fetchStudents();
  }

  applyMarkAttendence(markStudent: FormGroup) {
    this.studentsDataService.markAttendence(markStudent);
    this.markStudent.reset();
  }
}
