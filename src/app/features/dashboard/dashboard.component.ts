import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { StudentsDataService } from 'src/app/services/studentsData.service';
import { Students } from 'src/app/models/interfaces/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'action'];
  dataSource = new MatTableDataSource<Students>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  allStudents: Students[] = [];

  constructor(
    private http: HttpClient,
    private studentsDataService: StudentsDataService
  ) { }

  ngOnInit() {
    this.studentsDataService.allStudents$.subscribe((students) => {
      this.dataSource.data = students;
      this.allStudents = students;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    });

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.fetchStudents();
  }

  fetchStudents() {
    this.studentsDataService.fetchStudents();
  }

  DeleteStudent(id: string) {
    this.studentsDataService.deleteStudent(id);
  }
}
