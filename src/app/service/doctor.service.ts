import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  results = [];
  constructor(private http: HttpClient) { }

  public getDoctors(){
    return this.http.get<any>('http://localhost:8080/doctor/');
  }

  public createDoctor(doctor:any) {
    return this.http.post<any>('http://localhost:8080/doctor/', doctor);
  }
}
