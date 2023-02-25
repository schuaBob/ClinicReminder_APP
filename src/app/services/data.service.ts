import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../models/reminder';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = "api";

  constructor(private http: HttpClient) { }

  public getReminders(): Observable<Reminder[]>{
    return this.http.get<Reminder[]>(`${this.api}/patient/reminders`);
  }

  public updateReminderById(id: number) {
    console.log(id)
    this.http.put(`${this.api}/reminder/${id}`, {
      done: true
    }).subscribe({
      next:(value) =>{
        console.log(value)
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}
