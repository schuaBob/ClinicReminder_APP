import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NotificationService } from './notification.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  
  constructor(
    private storageService: StorageService,
    private notiService: NotificationService
  ) { }
  
  async init() {
    const token = await this.storageService.get("token")
    console.log(token)
    let ws = new WebSocket(`${environment.wsUrl}/notificationHandler`)
    ws.addEventListener('open', (event) => {
      ws.send(token);
    });
    
    ws.addEventListener('message', (event) => {
      this.notiService.pushNotification(event.data)
      console.log('Received message from WebSocket:', event.data);
    });
  }

}
