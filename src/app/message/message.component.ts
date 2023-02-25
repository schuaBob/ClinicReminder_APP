import { Component, Input } from '@angular/core';
import { Reminder } from '../models/reminder';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {

  @Input() reminder?: Reminder;

  constructor(private actionSheetCtrl: ActionSheetController) {

  }
  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Have you finish this reminder?',
      subHeader: 'Mark done if finished',
      buttons: [
        {
          text: 'Done',
          data: {
            action: 'done',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    console.log(result)
  }
}
