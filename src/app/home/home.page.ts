import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Reminder } from '../models/reminder';


import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private reminders: Reminder[] = [];

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getReminders().subscribe({
      next: (reminders) => {
        this.reminders = reminders;
        console.log(reminders)
      }
    })
  }
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }
}
