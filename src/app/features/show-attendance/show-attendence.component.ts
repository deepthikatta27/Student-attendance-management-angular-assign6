import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-attendence',
  templateUrl: './show-attendence.component.html',
  styleUrls: ['./show-attendence.component.scss']
})
export class ShowAttendenceComponent  implements OnInit { attendanceList: any[]; allStudents: any[];
  student: any;
  displayedColumns =['date','status']
 constructor(private route: ActivatedRoute, private http: HttpClient) { }

 ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`https://6548d898dd8ebcd4ab23ba22.mockapi.io/students/${id}`)
      .subscribe(data => {
        this.student = data;
        console.log(this.student)
        console.log(this.student.attendance.length)
      });
 }}