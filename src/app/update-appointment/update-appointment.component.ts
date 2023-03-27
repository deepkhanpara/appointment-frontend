import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Doctor } from '../model/doctor.model';
import { AppointmentService } from '../service/appointment.service';
import { DoctorService } from '../service/doctor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent {
  constructor(
    private appointmentService:AppointmentService,
    private doctorService:DoctorService,
    private location:Location
  ) {}

  doctors: any;
  appointment: any;

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
    this.appointment = this.location.getState();
    this.appointmentForm.setValue({
      id: this.appointment.id,
      patientName: this.appointment.patientName,
      patientEmailId: this.appointment.patientEmailId,
      patientContactNo: this.appointment.patientContactNo,
      patientDateOfBirth: this.appointment.patientDateOfBirth,
      appointmentDateTime: this.appointment.appointmentDateTime,
      doctor: this.appointment.doctor,
    });     
  
    this.doctorService.getDoctors().subscribe({
      next: data =>{
        this.doctors=data
      }
    })
  }
  
  compareFn(c1: Doctor, c2: Doctor): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  update() {
    if(this.appointmentForm.status == 'VALID'){
 
      //let doctorId = this.appointmentForm.value.doctor;
      //this.appointmentForm.value.doctor = { id : doctorId }
      console.log(this.appointmentForm.value)

      if(this.appointmentForm.value.id) {
        console.log("Updating appointment...")
        this.appointmentService.updateAppointment(this.appointmentForm.value).subscribe({
          next: data => {
            console.log(data);
            alert(data.message);
          },
          error: error => {
            console.error(error);
            alert("There was an error!");
          }
        })
      }
    } 
  }
}
