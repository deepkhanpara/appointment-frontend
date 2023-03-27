import { Component } from '@angular/core';
import { DoctorService } from '../service/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  constructor(
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
}
