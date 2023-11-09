import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { StudentsDataService } from 'src/app/services/studentsData.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {
  public chart: Chart;

  constructor(private studentsDataService: StudentsDataService) {}

  ngOnInit() {
    this.studentsDataService.getStudents()
      .subscribe(
        students => {
          const { labels, data } = this.calculateAttendance(students);
          this.createChart(labels, data);
        },
        err => console.error('Error fetching students:', err)
      );
  }

  createChart(labels: string[], data: number[]) {
    const config = {
      type: 'bar' as const,
      data: {
        labels,
        datasets: [{
          label: 'Students Attendance',
          data,
          backgroundColor: [
            'rgba(67, 160, 71, 0.8)', // dark green
            'rgba(255, 87, 34, 0.8)', // dark orange
            'rgba(33, 150, 243, 0.8)', // dark blue
          ],
          borderColor: [
            'rgb(67, 160, 71)', // dark green
            'rgb(255, 87, 34)', // dark orange
            'rgb(33, 150, 243)', // dark blue
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    };
    this.chart = new Chart('attendenceChart', config);
  }

  calculateAttendance(students) {
    const labels = [];
    const data = [];
    const presentCounts = {};

    students.forEach(student => {
      student.attendance.forEach(({ date, status }) => {
        if (status === 'present' || status === 'Present') {
          presentCounts[date] = presentCounts[date] ? presentCounts[date] + 1 : 1;
        } else if (!presentCounts[date]) {
          presentCounts[date] = 0;
        }
      });
    });

    Object.keys(presentCounts).forEach(date => {
      labels.push(date);
      data.push(presentCounts[date]);
    });

    return { labels, data };
  }
}