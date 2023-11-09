import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { StudentsDataService } from 'src/app/services/studentsData.service';

interface editStudentInfo {
  id: string;
  email: string;
  name: string;
  phone: number;
}

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent {

  editStudentId: number;
  editStudentInfo: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private studentsDataService: StudentsDataService, private activeRoute: ActivatedRoute,) {
    this.editStudentInfo = this.fb.group({
      id: ['',Validators.required],
      name:  ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]
    })

    this.editStudentId = this.activeRoute.snapshot.params['id'];
    //console.log(this.editStudentInfo.value.id)
     const selectedStudent = this.studentsDataService.getStudentById(this.editStudentId);
     //console.log(selectedStudent);
     this.editStudentInfo.get('id').setValue(selectedStudent.id);
     this.editStudentInfo.get('name').setValue(selectedStudent.name);
     this.editStudentInfo.get('phone').setValue(selectedStudent.phone);
     this.editStudentInfo.get('email').setValue(selectedStudent.email);
  }

  EditStudentDetails(editStudentInfo: FormGroup, editStudentId: number) {
    this.studentsDataService.editStudent(editStudentInfo, this.editStudentId);
  }
}