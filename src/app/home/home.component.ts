import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { DoctorService } from '../doctor.service';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  loadAppointment(value: any){
    console.log("appointment is selected:", value)
    this.appointmentForm.setValue({
      id: value.id,
      patientName: value.patientName,
      patientEmailId: value.patientEmailId,
      patientContactNo: value.patientContactNo,
      appointmentDateTime: value.appointmentDateTime,
      doctor: value.doctor.id,
    });     
  }

  submit() {

    if(this.appointmentForm.status == 'VALID'){
      let doctorId = this.appointmentForm.value.doctor;
      this.appointmentForm.value.doctor = { id : doctorId}
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
      
      else {
        //create call
        console.log("Creating appointment...")
        this.appointmentService.createAppointment(this.appointmentForm.value).subscribe({
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

