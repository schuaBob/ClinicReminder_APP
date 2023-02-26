import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reminder } from '../models/reminder';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private api = "api";

  constructor(private http: HttpClient, private storageService: StorageService) { }

  public async getReminders(): Promise<Observable<Reminder[]>> {
    let token = await this.storageService.get("token")
    return this.http.get<Reminder[]>(`${this.api}/patient/reminders`, {
      headers: { "Authorization": token }
    });
  }

  public async updateReminderById(id: number) {
    let token = await this.storageService.get("token")
    console.log(id + token)
    this.http.put(`${this.api}/reminder/${id}`, {
      done: true
    }, {
      headers: { "Authorization": token }
    }).subscribe({
      next: (value)=>{
        console.log(value)
      },
      error: (err) =>{
        console.error(err)
      }
    })
    
  }
}
