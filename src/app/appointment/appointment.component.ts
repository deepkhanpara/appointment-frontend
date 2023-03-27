import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Doctor } from '../model/doctor.model';
import { AppointmentService } from '../service/appointment.service';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  constructor(
    private appointmentService:AppointmentService,
    private doctorService:DoctorService
  ) {}

  appointments :any ;
  doctors: any;
  appointmentForm = new FormGroup({
    id: new FormControl(''),
    patientName: new FormControl(''),
    patientEmailId: new FormControl(''),
    patientContactNo: new FormControl(''),
    patientDateOfBirth: new FormControl(''),
    appointmentDateTime: new FormControl(''),
    doctor: new FormControl(''),
  });

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe({
      next: data =>{
        this.appointments=data
      }
    })
    this.doctorService.getDoctors().subscribe({
      next: data =>{
        this.doctors=data
      }
    })
  }



  compareFn(c1: Doctor, c2: Doctor): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  
}
