import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  results = [];
  constructor(private http: HttpClient) { }

  public getAppointments(){
    return this.http.get<any>('http://localhost:8080/appointment/');
  }

  public createAppointment(appointment:any) {
    return this.http.post<any>('http://localhost:8080/appointment/', appointment);
  }

  public updateAppointment(appointment:any) {
    return this.http.put<any>('http://localhost:8080/appointment/', appointment);
  }
}