import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { StudentsDataService } from 'src/app/services/studentsData.service';

interface addStud {
  email: string;
  name: string;
  phone: number;
}

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {

  addStudent: FormGroup;
    constructor(private fb: FormBuilder, private studentsDataService: StudentsDataService) {
      this.addStudent = this.fb.group({
        name:  ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
      })

  }

  addStudentDetails(addStudent:FormGroup) {
    this.studentsDataService.addStudent(addStudent);
  }

}
