import { Injectable, OnInit } from '@angular/core';
import { LocalNotifications } from '@capacitor/local-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }
  pushNotification(body: string) {
    LocalNotifications.checkPermissions().then((data) => {
      if (data.display === "denied") {
        LocalNotifications.requestPermissions().then((data) => {
          console.log("Requesting permissions")
        })
      } else {
        LocalNotifications.schedule({
          notifications: [
            {
              title: "new reminder",
              body: body,
              id: 1
            }
          ]
        })
      }
    })
  }
}
