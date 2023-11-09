import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { ChartsComponent } from './features/charts/charts.component';
import { MarkAttendenceComponent } from './features/mark-attendence/mark-attendence.component';
import { EditStudentComponent } from './features/edit-student/edit-student.component';
import { ShowAttendenceComponent } from './features/show-attendance/show-attendence.component';
import { WelcomeComponent } from './features/welcome/welcome.component';


 const routes: Routes = [

    {
      path:"dashboard",
      component: DashboardComponent
    },
    {
      path:"",
      component: WelcomeComponent
    }
    ,
    {
      path:"add-student",
      component: AddStudentComponent
    }
    ,
    {
      path:"mark-attendence",
      component: MarkAttendenceComponent
    },
    {
      path:"charts",
      component: ChartsComponent
    },
    {
      path:"edit-student/:id",
      component: EditStudentComponent
    },
    {
      path:"show-attendence/:id",
      component: ShowAttendenceComponent
    },
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
