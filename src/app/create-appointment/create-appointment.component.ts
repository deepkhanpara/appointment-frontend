import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Doctor } from '../model/doctor.model';
import { AppointmentService } from '../service/appointment.service';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {

  constructor(
    private appointmentService:AppointmentService,
    private doctorService:DoctorService
  ) {}

  doctors: any;

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe({
      next: data =>{
        this.doctors=data
      }
    })
  }

  appointmentForm = new FormGroup({
    id: new FormControl(''),
    patientName: new FormControl('', [Validators.required]),
    patientEmailId: new FormControl('', [Validators.required]),
    patientContactNo: new FormControl('', [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    patientDateOfBirth: new FormControl('', [Validators.required]),
    appointmentDateTime: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required]),
  });

  compareFn(c1: Doctor, c2: Doctor): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  submit() {
    if(this.appointmentForm.status == 'VALID'){
   
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
