import { Component, Input } from '@angular/core';
import { Reminder } from '../models/reminder';
import { ActionSheetController } from '@ionic/angular';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {

  @Input() reminder?: Reminder;

  constructor(private actionSheetCtrl: ActionSheetController, private dataService: DataService) {

  }
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
  async presentActionSheet(id: number) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Have you finish this reminder?',
      subHeader: 'Mark done if finished',
      buttons: [
        {
          text: 'Done',
          data: 1,
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: 0,
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    if (result.data) {
      this.dataService.updateReminderById(id);
    }
  }
}
