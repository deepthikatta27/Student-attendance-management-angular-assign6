import { Injectable, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { Students } from '../models/interfaces/students';

@Injectable({
  providedIn: 'root',
 })

export class StudentsDataService {
  allStudents: Students[] = [];
  allStudents$ = new BehaviorSubject<Students[]>([]);
  dataSource: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
       this.fetchStudents();
      }

  fetchStudents() {
    return this.http
      .get<Students[]>('https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/')
      .pipe(
        map((students) =>
          students.map((student) => ({ ...student, id: student.id || '' }))
        )
      )
      .subscribe((students) => {
        this.allStudents = students;
        this.allStudents$.next(students);
      });
  }
getStudents() {
  return this.http.get<Students[]>(
    'https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/'
  );
}

getStudentById(id: number): Students {
  return this.allStudents.find((student) => student.id === id.toString());
}

  addStudent(addStud: FormGroup) {
    this.http
      .post(
        'https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/',
        addStud.getRawValue()
      )
      .subscribe(() => {
        alert('New Student Added');
        this.fetchStudents();
      });
  }

  deleteStudent(id: string) {
    if (confirm('Confirmation: Delete this record?')) {
      this.http
        .delete(
          `https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/${id}`
        )
        .subscribe(
          () => {
            this.allStudents = this.allStudents.filter(
              (student) => student.id !== id
            );
            this.allStudents$.next(this.allStudents);
          },
          (err) => console.log('Error:', err)
        );
    }
  }

  editStudent(editStud: FormGroup, id: number) {
    const studentToUpdate= this.allStudents.find((student) => student.id === id.toString());
    if (!studentToUpdate) {
      throw new Error(`StudentID ${id} not found`);
    }
    else{
    const url = `https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/${studentToUpdate.id}`;
    this.http.put(url, editStud.value).subscribe(() => {
      const updatedStudent = { ...studentToUpdate, ...editStud.value };
      const index = this.allStudents.indexOf(studentToUpdate);
      this.allStudents.splice(index, 1, updatedStudent);
      this.allStudents$.next(this.allStudents);
      alert('Student Details Updated');
    });
    }
  }

  markAttendence(markStudent: FormGroup) {
    const { id, date, status } = markStudent.value;
    const studentToUpdate = this.allStudents.find(
      (student) => student.id === id
    );
    if (!studentToUpdate) {
      alert('Student not Found!');
    } else {
      const formattedDate = new Date(date).toLocaleDateString('en-US');
      const updatedAttendance = [...studentToUpdate.attendance, { date: formattedDate, status }];
      const updatedStudent = { ...studentToUpdate, attendance: updatedAttendance };
      const url = `https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/${id}`;
      this.http.put(url, updatedStudent).subscribe(() => {
        const index = this.allStudents.indexOf(studentToUpdate);
        this.allStudents.splice(index, 1, updatedStudent);
        this.allStudents$.next(this.allStudents);
        alert('Attendence Updated');
      });
    }
  }
}