import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './shared/components/top-bar/top-bar.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AddStudentComponent } from './features/add-student/add-student.component';
import { MatButtonModule } from '@angular/material/button';
import { MarkAttendenceComponent } from './features/mark-attendence/mark-attendence.component';
import { ChartsComponent } from './features/charts/charts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { EditStudentComponent } from './features/edit-student/edit-student.component';
import { MatCommonModule } from '@angular/material/core';
import { MatRowDef } from '@angular/material/table';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerInput, MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ShowAttendenceComponent } from './features/show-attendance/show-attendence.component';
import { NgChartsModule } from 'ng2-charts';
import { WelcomeComponent } from './features/welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    DashboardComponent,
    AddStudentComponent,
    MarkAttendenceComponent,
    ChartsComponent,
    WelcomeComponent,
    EditStudentComponent,
    ShowAttendenceComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatCommonModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
NgChartsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


