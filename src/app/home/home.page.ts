import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { Reminder } from '../models/reminder';


import { DataService } from '../services/data.service';
import { NotificationService } from '../services/notification.service';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private reminders: Reminder[] = [];

  constructor(
    private data: DataService,
    private socketService: SocketService,
    private notiService: NotificationService
  ) { }

  async ngOnInit(): Promise<void> {
    (await this.data.getReminders()).subscribe({
      next: (reminders: Reminder[]) => {
        this.reminders = reminders;
      }
    })
    this.socketService.init()
  }
  refresh(ev: any) {
    console.log("refreshing")
    this.data.getReminders().then((obs) => {
      obs.subscribe({
        next: (reminders: Reminder[]) => {
          this.reminders = reminders;
          (ev as RefresherCustomEvent).detail.complete();
        }
      })
    })
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }
}
