import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { DoctorComponent } from './doctor/doctor.component';
import { HomeComponent } from './home/home.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'appointment/create', component: CreateAppointmentComponent },
  { path: 'appointment/update', component: UpdateAppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
